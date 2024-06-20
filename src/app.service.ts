import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    const pageTitle = 'NestJS 9';
    const pageContent = 'Hello, Welcome to Engineering Lab! Start editing to see some magic happen :)';
   return `<html>
        <head>
          <title>${pageTitle}</title>
        </head>
        <body>
          <p>${pageContent}</p>
        </body>
      </html>`;
  }
}
