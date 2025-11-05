
export type AspectRatio = '1:1' | '4:5' | '16:9' | '9:16' | '4:3' | '3:4';

export interface Style {
  id: string;
  name: string;
  previewImage: string;
  promptSuffix: string;
}

export interface Settings {
  aspectRatio: AspectRatio;
  variations: number;
}
