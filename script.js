
//second part for test
getsubs();
async function getsubs(){

  // Use You google cloud console Yt api after "&key="

    const channelIdCarry = 'UCm1_-vkonHv3nQuvux5xtDw'
    const urlCarry = `https://www.googleapis.com/youtube/v3/channels?part=statistics&id=${channelIdCarry}&key=ApiKey`;
    const responseCarry =await fetch(urlCarry);
    const dataCarry = await responseCarry.json();
    const subscriberCountCarry = dataCarry.items[0].statistics.subscriberCount
    console.log(subscriberCountCarry);
    const rootCarry = document.getElementById('carry');
    // You can change d2020d for place you need to display sub count
    const carry = document.createElement('d2020d');
    const nodeCarry = document.createTextNode(`Subscriber : ${subscriberCountCarry}`);
    carry.append(nodeCarry);
    rootCarry.append(carry);
  }
