
//second part for test
getsubs();
async function getsubs(){

  // HelaLK

    const channelIdCarry = 'UCm1_-vkonHv3nQuvux5xtDw'
    const urlCarry = `https://www.googleapis.com/youtube/v3/channels?part=statistics&id=${channelIdCarry}&key=AIzaSyCjlpCxj8Xh5Qh_yhTV3KAlyo7EH3oPCV8`;
    const responseCarry =await fetch(urlCarry);
    const dataCarry = await responseCarry.json();
    const subscriberCountCarry = dataCarry.items[0].statistics.subscriberCount
    console.log(subscriberCountCarry);
    const rootCarry = document.getElementById('carry');
    const carry = document.createElement('d2020d');
    const nodeCarry = document.createTextNode(`Subscriber : ${subscriberCountCarry}`);
    carry.append(nodeCarry);
    rootCarry.append(carry);
  

}
