import { createParamDecorator, ExecutionContext } from "@nestjs/common";

export const CurrentUser = createParamDecorator(
    (data: never, context: ExecutionContext) => { //type never means that the data argument will never be used
        const request = context.switchToHttp().getRequest();
        return request.currentUser;
    }
);