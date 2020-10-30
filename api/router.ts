import * as express from 'express';

export default express.Router();
export const isTest = process.env.NODE_ENV === 'test';
