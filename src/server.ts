import App from './App';
import EntityRouter from './routers/EntityRouter';
import { Router } from 'express';
import { AppDataSource } from './data-source';
import { Board, Column, Task, User, UserBoard } from './database/models';

import {
  BoardServices,
  ColumnServices,
  TaskServices,
  UserBoardServices,
  UserServices,
  LoginServices
} from './services';

import {
  BoardControllers,
  ColumnControllers,
  LoginControllers,
  TaskControllers,
  UserBoardControllers,
  UserControllers
} from './controllers';

import {
  boardSchema,
  columnSchema,
  taskSchema,
  userBoardSchema,
  userSchema,
  loginSchema
} from './schemas';
import ErrorMiddleware from './middlewares/ErrorMiddleware';
import LoginRouter from './routers/LoginRouter';
import JwtMiddleware from './middlewares/JwtMiddleware';
import BoardRouter from './routers/BoardRouter';

const PORT = 3001;

const app = new App();

const userServices = new UserServices(AppDataSource, User, userSchema);
const userControllers = new UserControllers(userServices);
const userRouter = new EntityRouter(Router(), userControllers);

app.routes('/users', userRouter.router);

const loginServices = new LoginServices(AppDataSource, User, loginSchema);
const loginControllers = new LoginControllers(loginServices);
const loginRouter = new LoginRouter(Router(), loginControllers);

app.routes('/login', loginRouter.router);

const jwtMiddleware = new JwtMiddleware().verifyToken;
app.useJwtMiddleware(jwtMiddleware);

const boardServices = new BoardServices(
  AppDataSource,
  Board,
  boardSchema,
  UserBoard
);
const boardControllers = new BoardControllers(boardServices);
const boardRouter = new BoardRouter(Router(), boardControllers);

app.routes('/boards', boardRouter.router);

const columnServices = new ColumnServices(AppDataSource, Column, columnSchema);
const columnControllers = new ColumnControllers(columnServices);
const columnRouter = new EntityRouter(Router(), columnControllers);

app.routes('/columns', columnRouter.router);

const taskServices = new TaskServices(AppDataSource, Task, taskSchema);
const taskControllers = new TaskControllers(taskServices);
const taskRouter = new EntityRouter(Router(), taskControllers);

app.routes('/tasks', taskRouter.router);

const userBoardServices = new UserBoardServices(
  AppDataSource,
  UserBoard,
  userBoardSchema
);
const userBoardControllers = new UserBoardControllers(userBoardServices);
const userBoardRouter = new EntityRouter(Router(), userBoardControllers);

app.routes('/usersBoards', userBoardRouter.router);

const errorMiddleware = new ErrorMiddleware().errorMiddleware;

app.useErrorMiddleware(errorMiddleware);

app.start(PORT);
