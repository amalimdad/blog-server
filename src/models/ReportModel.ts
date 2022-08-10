export interface ReportModel {
  id: number;
  title: string;
  image_url?: string;
  auther?: { id: number, name: string };
  created_at?: string;
  contents?: {
    id: number,
    headline?: string,
    description?: string,
    image_path?: string,
  }[]
}