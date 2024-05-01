use anchor_lang::prelude::*;

declare_id!("3XkjQ2Z5QFVnrccwn7e58jyuCTk8DbPk39cuS8PAZkD8");

#[program]
pub mod solana_attendance_deposit_dapp {
    use super::*;

    pub fn greet(_ctx: Context<Initialize>) -> Result<()> {
        msg!("GM!");
        Ok(())
    }
}

#[derive(Accounts)]
pub struct Initialize {}
