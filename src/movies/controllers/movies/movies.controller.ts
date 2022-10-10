import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateMovieDto } from 'src/movies/dtos/CreateMovie.dto';
import { MoviesService } from 'src/movies/services/movies/movies.service';

@Controller('movies')
export class MoviesController {
  constructor(private movieService: MoviesService) {}

  @Get()
  async getMovies() {
    const movies = await this.movieService.findMovies();
    return movies;
  }

  @Post()
  createMovies(@Body() createMovieDto: CreateMovieDto) {
    this.movieService.createMovie(createMovieDto);
    return { msg: 'success' };
  }
}
