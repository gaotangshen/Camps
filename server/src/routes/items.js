const express = require("express");
const router = express.Router({mergeParams: true});
const Item = require("../models/item");

//INDEX -show all items show all item
router.get("/", function(req, res){
    // console.log(req.user);
    Item.find({}, function(err, allitems){
        if(err){
            res.status(500).json(err);
            // console.log(err);
        }else{
            res.status(200).json({ items: allitems });
            // res.render("items/index", {items: allitems, currentUser: req.user});
        }
    });
});

module.exports = router;
