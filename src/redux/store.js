
import {createStore,applyMiddleware} from 'redux';
import { logger } from 'redux-logger';
import Learner from "./reducer/Learner";

export const store = createStore(Learner,applyMiddleware(logger))