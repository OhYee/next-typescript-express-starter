import { Request, Response } from 'express';
import router, { isTest } from './router';

function hello(request: Request, response: Response) {
  response.send('hello');
}
function helloTest(request: Request, response: Response) {
  response.send('hello');
}

router.get('/hello', isTest ? hello : helloTest);
