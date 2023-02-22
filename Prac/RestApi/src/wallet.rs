use {
    super::schema::wallets,
    crate::miner::{Miner, MinerDAO},
    crate::DBPooledConnection,
    diesel::query_dsl::methods::FilterDsl,
    diesel::result::Error,
    diesel::{ExpressMethods, Insertable, Queryable, RunQueryDsl},
    rand::Rng,
    serde::{Deserialize, Serialize},
    uuid::Uuid,
};

// ---------------- JSON Payload (REST)

#[derive(Debug, Deserialize, Serialize)]
pub struct Wallet {
    pub address: String,
    pub club_name: String,
    pub total_hash_rate: i32,
    pub total_shares_mined: i32,
    pub total_workers_online: i32,
    pub workers_online: Vec<Wallet>,
}

// ---------------- POST Request Body for new Wallet

#[derive(Debug, Deserialize, Serialize)]
pub struct NewWalletRequest {
    club_name: String,
}

// ---------------- DAO Object (DB Table Records)

#[derive(Queryable, Insertable)]
#[table_name = "wallets"]
pub struct WalletDAO {
    pub address: String,
    pub club_name: String,
}
