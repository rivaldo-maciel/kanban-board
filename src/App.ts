import * as express from 'express';
import { Router, ErrorRequestHandler, RequestHandler } from 'express';

class App {
  private express: express.Application;

  constructor() {
    this.express = express();
    this.config();
  }

  private config(): void {
    this.express.use(express.json());
  }

  public routes(route: string, router: Router): void {
    this.express.use(route, router);
  }

  public useErrorMiddleware(middleware: ErrorRequestHandler): void {
    this.express.use(middleware);
  }

  public useJwtMiddleware(jwtMiddleware: RequestHandler) {
    this.express.use(jwtMiddleware);
  }

  public start(PORT: number): void {
    this.express.listen(PORT, () => {
      console.log(`Server running on port: ${PORT}`);
    });
  }
}

export default App;