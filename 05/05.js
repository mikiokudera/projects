const testimonials=[
      {  
        name:"Dylen John",
        photoUrl:"https://images.unsplash.com/flagged/photo-1573740144655-bbb6e88fb18a?w=1000&auto=format&fit=crop&q=60ixlib=rb-4ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D",
        text:"I am extremely impressed with appy's innovative fizz product. It perfectly combines style and functionality, making it a must-have for tech-savvy individuals. I can't imagine my day without it!",
      },
      {  
        name:"Jessica Miller",
        photoUrl:"https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=900&auto=format&fit=crop&q=60&ixlib=rb-4ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8d29tZW58ZW58MHx8MHx8fDA%3D",
        text:"I was amazed by the quality of the airpods I purchased from flingo. The sound is crystal clear and the design is sleek. I can't imagine using any other brand now. Thank you flingo for such an amazing product!",
      },
      {  
        name:"Sarah Johnson",
        photoUrl:"https://images.unsplash.com/photo-1485875437342-9b39470b3d95?w=900&auto=format&fit=crop&q=60&ixlib=rb-4ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHdvbWVufGVufDB8fDB8fHww",
        text:"I absolutely love the airpods from flingo! The sound quality is incredible, and they are so comfortable to wear. I use them every day while working out or just relaxing at home. Flingo's products never disappoint!",
      },
      {  
        name:"Julia Duncan",
        photoUrl:"https://images.unsplash.com/photo-1560087637-bf797bc7796a?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjZ8fHdvbWVufGVufDB8fDB8fHww",
        text:"KLC's headphones offer unparalleled sound quality and comfort, making them the perfect choice for music lovers. I can't imagine my daily commute without them. The sleek design and durability are just icing on the cake.",
      },
    ];
    const imgEl= document.querySelector("img");
    const textEl=document.querySelector(".text");
    const userEl=document.querySelector(".user");

    let idx=0;
    
    updateTestimonial();


    function updateTestimonial(){
        const{name,photoUrl,text}=testimonials[idx];
        imgEl.src=photoUrl;
        textEl.innerText=text;
        userEl.innerText=name;
        idx++;
        if(idx===testimonials.length){
            idx=0;
        }
        setTimeout(()=>{
            updateTestimonial()
        },5000 );
    };



















]