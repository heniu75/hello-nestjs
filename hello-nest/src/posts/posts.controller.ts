import { Controller, Get } from '@nestjs/common';

class HavePosts {
    count: number;
    success: boolean;
}

// tslint:disable-next-line: max-classes-per-file
@Controller('posts')
export class PostsController {

    @Get()
    havePosts(): HavePosts {
        return { count: 10, success: true };
    }
}
