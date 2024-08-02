const tierName = document.getElementById('tier');


// const tierList = document.querySelectorAll('.tier-List')
// console.log(tierList);

const itemContainers = document.getElementsByClassName('item-container');
// for(const itemContainer of itemContainers) {
//     setUpItemContainerForDrag(itemContainer);
// }


const imageUrl = document.getElementById('item');
// console.log(imageUrl);
// console.log(tierName);
const submitBtn = document.getElementById('button1');

submitBtn.addEventListener('click',(event)=>{
    event.preventDefault();
    // console.log(event.target);
    // console.log("button is clicked");
    if(tierName.value === ''){
        alert("Please input the Name");
    }
    else{
        addList(tierName.value);
        tierName.value = '';
    }

})

const imageForm = document.getElementById('button2');
// console.log(imageForm)
imageForm.addEventListener('click',(event)=>{
    event.preventDefault();
    if(imageUrl.value === ''){
        alert("Please Enter the image Url");
    }
    else{
        createTierListItems(imageUrl);
        imageUrl.value = '';
    }
})

function addList(tierName){
    // creating the tier List html 
    const newTierList = document.createElement('div');
    newTierList.classList.add('tier-List');// added the class name to the newtierList that we have created

    const heading = document.createElement('h1');
    heading.textContent = tierName;

    const newTierListItems = document.createElement('div');
    newTierListItems.classList.add("tier-list-items");

    // now merging all the individual elements that we have created;
    newTierList.appendChild(heading);
    newTierList.appendChild(newTierListItems);
    // now attaching this newTierList to the section

    const tierSection = document.getElementById('tier-List-Section')
    tierSection.appendChild(newTierList);

    setUpDropZoneInTierListItems(newTierListItems);
}


function createTierListItems(imageUrl){
    const imageDiv = document.createElement('div');
    imageDiv.classList.add('item-container');
    imageDiv.setAttribute('draggable','true');

    // now create an image tag to display the image list
    const image = document.createElement('img');
    image.src = imageUrl.value;
    image.alt = "failed to display img"

    // now appending all the created elements to have effect on the web page
    imageDiv.appendChild(image);

    const imgSection = document.getElementById('non-tier-list-img-section');
    imgSection.appendChild(imageDiv);

    setUpItemContainerForDrag(imageDiv);

    // setUpItemContainerForRemoval(imageDiv);



}


// console.log(itemContainers);

let currentDraggedItem;

function setUpItemContainerForDrag(itemContainer){
    itemContainer.addEventListener("dragstart",(event)=>{
        // console.log("Starting dragging");
        currentDraggedItem = event.target.parentNode;
        // console.log(currentDraggedItem);
    });
    // console.log(itemContainer);
    itemContainer.addEventListener('dblclick',(event)=>{
        const parent = event.target.parentNode;
        const nonTierList = document.getElementById('non-tier-list-img-section');
        nonTierList.appendChild(parent);

    })
}


function setUpDropZoneInTierListItems(tierListItems){
    // console.log(tierList);
    // console.log("drag event");
    tierListItems.addEventListener('drop',(event)=>{// dropping will not work by default it id dissabled
        event.preventDefault();
        // console.log("dropping");
    });

    tierListItems.addEventListener('dragover',function (event){// here we have to make  a non arrow funciton to use the this keyword
        // console.log("dragged over the drop zone");
        if(this !== currentDraggedItem.parentNode){
            this.appendChild(currentDraggedItem);
        }

    })

    
}

// const tierList = document.querySelectorAll('.')