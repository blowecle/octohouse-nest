import {
    UseInterceptors,
    NestInterceptor,
    ExecutionContext,
    CallHandler,
    Injectable,
} from '@nestjs/common';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { plainToClass } from 'class-transformer';

interface ClassConstructor {
    new (...args: any[]): {};
}

//custom decorator
export function Serialize(dto: ClassConstructor) {
    return UseInterceptors(new SerializeInterceptor(dto));
}

export class SerializeInterceptor implements NestInterceptor {
    constructor(private dto: ClassConstructor) {}

    intercept(context: ExecutionContext, handler: CallHandler): Observable<any> {
        //Run something before handler
        // console.log('I am running before handler');

        return handler.handle().pipe(
            map((data: any) => {
                //Run something before returning response
                // console.log('I am running before returning response');

                return plainToClass(this.dto, data, {
                    excludeExtraneousValues: true,
                });
            })
        )
    }
}