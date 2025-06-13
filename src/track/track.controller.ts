import { Track } from './track.interface';
import { TrackService } from './track.service';
import { Controller } from '@nestjs/common';

@Controller('track')
export class TrackController {
    constructor(private readonly trackService: TrackService){}
    @get()
    getTracks(): Promise <Track[]> {
        return this.trackService.getTracks();
    }
}
