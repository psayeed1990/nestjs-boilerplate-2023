import { Injectable, Scope } from '@nestjs/common';

@Injectable({ scope: Scope.REQUEST })
export class RequestService {
  private userdId: string;

  setUserId(userId: string) {
    this.userdId = userId;
  }

  getUserId() {
    return this.userdId;
  }
}
