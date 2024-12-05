import { 
    PipeTransform, Injectable, 
    ArgumentMetadata, BadRequestException 
} from '@nestjs/common';
import { validate } from 'class-validator';
import { plainToInstance } from 'class-transformer';

import { BookDto } from '../dto/book.dto';

@Injectable()
export class BookValidationPipe implements PipeTransform {
  async transform(value: any, metadata: ArgumentMetadata) {
    // obj convert to class
    const object = plainToInstance(BookDto, value);

    // class validation
    const errors = await validate(object);
    if (errors.length > 0) {
        throw new BadRequestException('Validation failed: ' + JSON.stringify(errors));
    }

    return value;
  }
} 
