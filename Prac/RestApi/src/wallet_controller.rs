use {crate::util::*, crate::wallet::*, actix_web::web::Json, actix_web::HttpResponse};

// List all Wallets
#[get("/wallets")]
pub async fn list_wallets() -> HttpResponse {
    /*
        TODO: Get all WalletDAO objects from DB and convert to Wallet objects
    */
    let wallets: Vec<Wallet> = vec![]; // Empty for now
    ResponseType::Ok(wallets).get_response()
}

// Get a Wallet
#[get("/wallets/{id}")]
pub async fn get_wallet() -> HttpResponse {
    /*
        TODO: Get the WalletDAO object from DB WHERE id - requested id
                and convert to Wallet object
    */
    let wallet: Option<Wallet> = None; // None for now
    match wallet {
        Some(wallet) => ResponseType::Ok(wallet).get_response(),
        None => ResponseType::NotFound(NotFoundMessage::new("Wallet not found.".to_string()))
            .get_response(),
    }
}

// Create new Wallet
#[post("/wallets/{id}/wallets")]
pub async fn create_wallet(wallet_request: Json<NewWalletRequest>) -> HttpResponse {
    /*
        TODO: Create a new WalletDAO object from requested inputs and write to DB
    */
    let wallet: Vec<Wallet> = vec![];
    ResponseType::Created(wallet).get_response()
}
