use {
    actix_web::HttpResponse,
    serde::{Deserialize, Serialize},
};

#[derive(Debug, Deserialize, Serialize)]
pub struct NotFoundMessage {
    message: String,
}

impl NotFoundMessage {
    pub fn new(message: String) -> Self {
        Self { message }
    }
}

pub enum ResponseType<T> {
    Ok(T),
    NotFound(T),
    Created(T),
}

impl<T: Serialize> ResponseType<T> {
    pub fn get_response(&self) -> HttpResponse {
        match self {
            ResponseType::Ok(payload) => HttpResponse::Ok()
                .content_type("application/json")
                .json(payload),
            ResponseType::NotFound(payload) => HttpResponse::Ok()
                .content_type("application/json")
                .json(payload),
            ResponseType::Created(payload) => HttpResponse::Ok()
                .content_type("application/json")
                .json(payload),
        }
    }
}
