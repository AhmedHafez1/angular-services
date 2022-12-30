import { HttpClient } from "@angular/common/http";
import { DataService } from "./data.service";

export const dataServiceFactory = (http: HttpClient) => {
  const dataService = new DataService(http);
  return dataService;
};
