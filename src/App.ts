import express from 'express';
import { Router, ErrorRequestHandler } from 'express';

class App {
  express: express.Application;

  constructor() {
    this.express = express();
    this.config();
  }

  private config(): void {
    this.express.use(express.json());
  }

  private routes(route: string, router: Router): void {
    this.express.use(route, router);
  }

  private useErrorMiddleware(middleware: ErrorRequestHandler): void {
    this.express.use(middleware);
  }

  private start(PORT: number): void {
    this.express.listen(PORT, () => {
      console.log(`Server running on port: ${PORT}`);
    });
  }
}

export default App;