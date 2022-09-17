# HateCompany-Hackathon-C-4

Smart Contracts | durmusgulbahar#2098


1. No interactions with Rank NFT's -> BRONZE/SILVER/GOLD
3. All informations can be fetch from smart contract by "get" functions.
 - > getUsername(address _addr)  // returns username of the wallet address .


- [x] User struct is designed to includes all informations.
- [x] 1 Hour Post delay is implemented. (Test users or members don't need to wait 1 hours.)
- [x] ALL USERS MUST PAY 0,0666 usdc + gas to POST AN ENTRY. 
- [x] GOLD USERS MUST PAY 0,666 usdc + gas to CREATE A HEADLINE. 
- [ ] Users entry and headline will be stored at IPFS, like
    - > database/{user_wallet_address}/entries/
    - > database/{user_wallet_address}/headlines/
- [x] Restrictions coded like, user must be exist and shouldn't be banned to post entry or      create headline
- [ ] 
- [ ] Upvote counter and leaderboards.
- [ ] Created Silver list and Gold list consist of addresses who posted required entry to up to rank.