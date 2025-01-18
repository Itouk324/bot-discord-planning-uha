type TableOptions = {
  width?: number;
  wrapText?: boolean;
}

type TableRow = {
  label: string;
  content: string;
}

export class ConsoleTable {
  private readonly width: number;
  private readonly wrapText: boolean;

  constructor(options: TableOptions = {}) {
    this.width = options.width || 45;
    this.wrapText = options.wrapText ?? true;
  }

  private createLine(): string {
    return `+${'-'.repeat(this.width - 2)}+`;
  }

  private wrapContent(text: string, maxWidth: number): string[] {
    const words = text.split(' ');
    const lines: string[] = [];
    let currentLine = words[0];

    for (let i = 1; i < words.length; i++) {
      const word = words[i];
      if ((currentLine + ' ' + word).length <= maxWidth) {
        currentLine += ' ' + word;
      } else {
        lines.push(currentLine);
        currentLine = word;
      }
    }
    lines.push(currentLine);
    return lines;
  }

  private formatRow(label: string, content: string = ''): string {
    const maxContentWidth = this.width - 4 - label.length;
    const formattedLines: string[] = [];
    
    if (this.wrapText) {
      const lines = this.wrapContent(content, maxContentWidth);
      
      const firstLine = `| ${label}${lines[0]}`;
      formattedLines.push(firstLine + ' '.repeat(Math.max(0, this.width - firstLine.length - 1)) + '|');
      
      for (let i = 1; i < lines.length; i++) {
        const line = `| ${' '.repeat(label.length)}${lines[i]}`;
        formattedLines.push(line + ' '.repeat(Math.max(0, this.width - line.length - 1)) + '|');
      }
    } else {
      const truncatedContent = content.length > maxContentWidth 
        ? content.slice(0, maxContentWidth - 3) + '...'
        : content;
      const line = `| ${label}${truncatedContent}`;
      formattedLines.push(line + ' '.repeat(Math.max(0, this.width - line.length - 1)) + '|');
    }
    
    return formattedLines.join('\n');
  }

  public drawTable(rows: TableRow[]): void {
    console.log(this.createLine());
    
    rows.forEach(({label, content}, index) => {
      console.log(this.formatRow(label, content));

      if (index < rows.length - 1) {
        console.log(this.createLine());
      }
    });
    
    console.log(this.createLine());
  }

  public static quickDraw(label: string, content: string, options?: TableOptions): void {
    const table = new ConsoleTable(options);
    table.drawTable([{ label, content }]);
  }
}

export const createTable = (options?: TableOptions) => new ConsoleTable(options);