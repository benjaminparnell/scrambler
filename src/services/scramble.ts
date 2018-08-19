import { injectable } from '../container';

@injectable()
class ScrambleService {
  private FACES: string[] = ['U', 'D', 'F', 'B', 'R', 'L'];

  public generate() {
    return Array.apply(null, Array(30))
      .map(() => this.randomMove())
      .join(', ');
  }

  private randomMove() {
    return `${['', '2'][Math.floor(Math.random() * 2)]}${this.randomFace()}${
      ['', "'"][Math.floor(Math.random() * 2)]
    }`;
  }

  private randomFace() {
    return this.FACES[Math.ceil(Math.random() * this.FACES.length) - 1];
  }
}

export default ScrambleService;
