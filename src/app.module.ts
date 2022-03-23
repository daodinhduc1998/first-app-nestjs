import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserController } from './controllers/user/user.controller';
import { ArticleController } from './controllers/article/article.controller';
import { CategoryController } from './controllers/category/category.controller';

@Module({
  imports: [],
  controllers: [AppController, UserController, CategoryController, ArticleController],
  providers: [AppService],
})
export class AppModule { }
