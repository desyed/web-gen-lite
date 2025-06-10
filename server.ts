#!/usr/bin/env bun

import app from './src/app';

 
export default {
	port: 4000,
	fetch: app.fetch,
};