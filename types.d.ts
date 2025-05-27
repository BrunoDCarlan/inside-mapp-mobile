declare interface RequireContext {
    keys(): string[];
    resolve: (id: string) => string;
    id: string;
    <T>(id: string): T;
  }
  
  declare interface NodeRequire {
    context(
      path: string,
      deep?: boolean,
      filter?: RegExp
    ): RequireContext;
  }
  