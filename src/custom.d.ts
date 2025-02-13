// custom.d.ts

declare function require(context: string): {
  (id: string): any;
  keys(): string[];
};
