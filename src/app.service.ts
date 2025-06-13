import { Injectable } from '@nestjs/common';


@Injectable()
export class AppService {
  getTracks(): any {
    return tracks;
  }
}
