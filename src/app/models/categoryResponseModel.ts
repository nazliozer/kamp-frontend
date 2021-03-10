import { Category } from "./category";
import { ResponseModel } from "./responseModel";

export interface CaregoryResponseModel extends ResponseModel{
    data:Category[]
}