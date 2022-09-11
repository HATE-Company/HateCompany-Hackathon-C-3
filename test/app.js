const { use, expect } = require("chai");
const { ethers } = require("hardhat");



let App;
let owner;
let acc1;
let acc2;

const entryFee = 39000000000000 ;//wei , // 0.07 $ or 0.000039 ether


describe("App Contract", function(){
    it("Should deploy App contract", async function(){

        const app = await ethers.getContractFactory("App");
        App = await app.deploy();

        console.log("Contract Address : " ,App.address)

    });
    
    describe("getUserInfo()", function(){
        it("Can be fetch users with address", async function(){

            
            [owner,acc1,acc2] = await ethers.getSigners();
            console.log("\t", " 🧑‍🏫 Owner Address: ", owner.address);
            console.log("\t", " 🧑‍🏫 Acc1 Address: ", acc1.address);
            console.log("\t", " 🧑‍🏫 Acc2 Address: ", acc2.address);
    
            const userInfo = await App.getUserInfo(owner.address);
            console.log("\n\t ✅ UserInfo of tester address : ", userInfo);
        })
       
    });

    describe("setUsername() and getUsername()", function(){
        it("Set username function and we can get with getUsername()", async function(){

            const username = "durmus";

            await App.setUsername(username);

            console.log(`\t\n ✅ ${owner.address} -> ${await App.getUsername(owner.address)}`)
           
            expect(username).to.equal(await App.getUsername(owner.address));
        })
    });


    describe("Posting entry fee", function(){
        it("When users posts entry, entryFee will be moved to contract", async function(){
            await App.postEntryWithFee({value: ethers.utils.parseEther("0.000039")});

            //Get contract balance

        });


        // it("Posting entry with low fee, expected: 0.000039 ethers but send 0.00001 ether", function(){

        // })  

    })




    // describe("upvote() function and ranks", function(){
    //     it("Bronze users can not upvote other bronzes entries", function(){

    //     })
    // })


    

})

