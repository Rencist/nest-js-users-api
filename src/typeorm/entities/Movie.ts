import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity({ name: 'movies' })
export class Movie {
  @PrimaryGeneratedColumn()
  id: number;
  @Column({ unique: true })
  title: string;
  @Column()
  imageUrl: string;
  @Column()
  desc: string;
}
