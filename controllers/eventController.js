const mongoose = require("mongoose");
const { Event } = require("../models/eventModel");

// ------------------------------------
//             GET ALL Event
// ------------------------------------


const getAllEvent = (req, res) => {
  const eventName = req.params.name;
  Event.find({ userName: eventName })
    .then((result) => {
      res.status(200);
      res.send(result);
    })
    .catch((err) => {
      res.status(400);
      res.send(err);
    });
};

// ---------------------------
//         Add Event
// ---------------------------


const addEvent = (req, res) => {
  const { eventName, eventId, city, date, description, images } = req.body;

  const newEvent = new Event({
    eventName,
    eventId,
    city,
    date,
    description,
    images,
  });

  newEvent
    .save()
    .then((result) => {
      console.log(result);
      res.status(201).send("Event  Created");
    })
    .catch((err) => {
      res.json(err.message);
    });
};


// --------------------------
//     Update Event
// --------------------------

const updateEvent = (req, res) => {
  const id = req.params.id;
  Event.findOneAndUpdate({_id: id},
    {eventName: req.body.eventName,
      city:req.body.city,
      date:req.body.date,
      description:req.body.description,
      images:req.body.images},(err,result)=>{
    if(err){
      err.status(400).send("err");
    }else{
      res.status(201).send("updated");
    }
  } )
  

};


module.exports = { getAllEvent, addEvent,updateEvent };

