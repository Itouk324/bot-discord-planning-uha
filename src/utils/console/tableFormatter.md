# ConsoleTable

A simple and flexible utility for creating formatted tables in the console with automatic text wrapping.

## Features

- Automatic text wrapping
- Configurable table width
- TypeScript support
- Easy to use API
- Clean and consistent output

## Usage

### Basic Usage

```typescript
import { createTable } from "./utils/console/tableFormatter";

const table = createTable();
table.drawTable([
  { label: "Name: ", content: "John Doe" },
  { label: "Email: ", content: "john@example.com" }
]);
```

Output:
```
+-------------------------------------------+
| Name: John Doe                            |
+-------------------------------------------+
| Email: john@example.com                   |
+-------------------------------------------+
```

### Quick Single Row

```typescript
import { ConsoleTable } from "./utils/console/tableFormatter";

ConsoleTable.quickDraw("Status: ", "Operation completed successfully");
```

### Custom Configuration

```typescript
const table = createTable({
  width: 60,      // Custom table width
  wrapText: true  // Enable/disable text wrapping
});

table.drawTable([
  { 
    label: "Description: ", 
    content: "This is a very long description that will automatically wrap to the next line when it reaches the maximum width"
  }
]);
```

Output:
```
+----------------------------------------------------------+
| Description: This is a very long description that will     |
|              automatically wrap to the next line when it   |
|              reaches the maximum width                     |
+----------------------------------------------------------+
```

## API Reference

### Class: ConsoleTable

#### Constructor Options

```typescript
interface TableOptions {
  width?: number;    // Table width (default: 45)
  wrapText?: boolean; // Enable text wrapping (default: true)
}
```

#### Methods

```typescript
interface TableRow {
  label: string;
  content: string;
}

// Instance methods
drawTable(rows: TableRow[]): void;

// Static methods
static quickDraw(label: string, content: string, options?: TableOptions): void;
```

### Factory Function

```typescript
createTable(options?: TableOptions): ConsoleTable;
```

## Examples

### Multiple Rows with Different Widths

```typescript
const table = createTable({ width: 50 });
table.drawTable([
  { label: "Title: ", content: "Project Report" },
  { label: "Author: ", content: "Jane Smith" },
  { 
    label: "Summary: ", 
    content: "This report contains the quarterly results and future projections"
  }
]);
```

### Disable Text Wrapping

```typescript
const table = createTable({ 
  width: 40, 
  wrapText: false 
});

// Content will be truncated with ... if it exceeds the width
table.drawTable([
  { label: "Error: ", content: "This is a very long error message that will be truncated" }
]);
```

## License

MIT License