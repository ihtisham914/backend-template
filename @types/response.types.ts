export type ResponseStatus = "success" | "fail" | "error";
export type ResponseCode =
  | "created"
  | "fetched"
  | "updated"
  | "deleted"
  | "authenticated"
  | "unauthenticated"
  | "unauthorized"
  | "invalid_req_params"
  | "invalid_req_body"
  | "server_error"
  | "duplicate_key"
  | "url_not_found";

export interface ResponseObject {
  code: ResponseCode;
  status: ResponseStatus;
  [key: string]: any;
}
