const tierName = document.getElementById('tier');

const imageUrl = document.getElementById('item');
console.log(imageUrl);
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
    // now attaching this newTierList to he section

    const tierSection = document.getElementById('tier-List-Section')
    tierSection.appendChild(newTierList);
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



}