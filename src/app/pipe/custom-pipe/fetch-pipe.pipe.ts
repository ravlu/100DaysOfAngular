import { Pipe, PipeTransform } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Pipe({
  name: 'fetch',
  pure: false,
})
export class FetchPipePipe implements PipeTransform {
  private cachedData: any;
  private cachedUrl: string;
  constructor(private http: HttpClient) {}
  transform(url: string): any {
    if (url !== this.cachedUrl) {
      this.cachedData = null;
      this.cachedUrl = url;
      this.http.get(url).subscribe((data: any) => {
        this.cachedData = data.concepts;
      });
    }

    return this.cachedData;
  }
}
