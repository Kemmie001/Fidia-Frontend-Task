<template>
  <Layout>
    <div class="lg:px-20 px-5 text-left ">
      <div class="lg:flex pt-8 lg:justify-between">
        <div class="pb-4 ">
        <h1 class="text-dark text-2xl font-semibold text-left">
          Welcome back, Olivia
        </h1>
        <p class="text-light text-base">
          Track, manage and forecast your customers and orders.
        </p>
        </div>
      <div class="flex mb-8 lg:self-center">
        <button class="btn-primary gray-text bg-white flex p-2">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g clip-path="url(#clip0_669_2994)">
          <path d="M13.3334 13.3334L10 10M10 10L6.6667 13.3334M10 10V17.5M16.9917 15.325C17.8045 14.8819 18.4466 14.1808 18.8166 13.3322C19.1866 12.4837 19.2635 11.5361 19.0352 10.6389C18.8069 9.74182 18.2863 8.94629 17.5556 8.3779C16.8249 7.80951 15.9258 7.50064 15 7.50003H13.95C13.6978 6.52439 13.2277 5.61864 12.575 4.85085C11.9223 4.08307 11.1041 3.47324 10.1818 3.0672C9.25949 2.66116 8.25715 2.46949 7.25013 2.5066C6.2431 2.5437 5.25758 2.80861 4.36768 3.28142C3.47777 3.75422 2.70662 4.42261 2.11221 5.23635C1.51781 6.05008 1.1156 6.98797 0.935844 7.97952C0.756086 8.97107 0.803449 9.99047 1.07437 10.9611C1.3453 11.9317 1.83273 12.8282 2.50003 13.5834" stroke="#344054" stroke-width="1.67" stroke-linecap="round" stroke-linejoin="round"/>
          </g>
          <defs>
          <clipPath id="clip0_669_2994">
          <rect width="20" height="20" fill="white"/>
          </clipPath>
          </defs>
          </svg>
          <a href="#" class="px-2 gray-text">Import</a>
        </button>
        <button class="btn-primary bg-primary text-white flex py-2 px-5 ml-4">
          <svg class="self-center" width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M7.00002 1.16669V12.8334M1.16669 7.00002H12.8334" stroke="white" stroke-width="1.67" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
          <a href="#" class="px-2">Add</a>
        </button>
      </div>
      </div>
      <div class="lg:flex w-full gap-x-8 ">
        <div class="lg:w-1/3" v-for="card in cards" :key="card.index">
          <detailCard
        class="my-8"
        :textColor="card.textColor"
        :title="card.title"
        :percent="card.percent"
        :figure="card.figure"
        :graphImage="card.graphImage"
        :arrowImage="card.arrowImage" />
        </div>
      </div>
      <div class="my-5 lg:flex justify-between lg:flex-row-reverse">
      <div class="search-bar z-0 relative w-full lg:w-4/12">
			<div class="absolute top-3 z-10 left-2 lg:left-10 bottom-0">
				<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
				<path d="M17.5 17.5L13.875 13.875M15.8333 9.16667C15.8333 12.8486 12.8486 15.8333 9.16667 15.8333C5.48477 15.8333 2.5 12.8486 2.5 9.16667C2.5 5.48477 5.48477 2.5 9.16667 2.5C12.8486 2.5 15.8333 5.48477 15.8333 9.16667Z" stroke="#667085" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round"/>
				</svg>
			</div>
			<div class="flex justify-end">
				<input placeholder="Search" class="pl-8 py-2 relative w-full lg:w-11/12" type="search" name="" id="">
			</div>

      </div>
      <div class="flex flex-col flex-col-reverse lg:flex-row  gap-x-4 w-full">
        <div class="flex gap-x-4">
          <button class="btn-secondary flex py-2 px-5">
         <a href="#" class="px-2">All time</a>
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M15 5L5 15M5 5L15 15" stroke="#6941C6" stroke-width="1.67" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
        </button>
      <button class="btn-secondary flex py-2 px-5">
         <a href="#" class="px-2">US, AU, +4</a>
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M15 5L5 15M5 5L15 15" stroke="#6941C6" stroke-width="1.67" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
        </button>
        </div>
      <button class="btn-primary my-5 lg:my-0 gray-text bg-white w-full lg:w-40 flex justify-center p-2">
          <svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M5.5 10H15.5M3 5H18M8 15H13" stroke="#344054" stroke-width="1.67" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
          <a href="#" class="px-2 lg:hidden">Edit filters</a>
          <a href="#" class="px-2 lg:flex hidden">More filters</a>
      </button>
      </div>
      </div>
       <!-- tAble -->
      <div
      class="
        table-container
        flex flex-col
        my-10
      "
    >
      <table
        class="
          cursor-pointer
          talent-table
        "
      >
        <thead class="">
          <tr class="text-left px-10 h-10 ash-text bg-white">
            <th class="w-3/12 text-sm font-thin">
              <div class="flex">
                <span class="pr-3 pl-5">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0 6C0 2.68629 2.68629 0 6 0H14C17.3137 0 20 2.68629 20 6V14C20 17.3137 17.3137 20 14 20H6C2.68629 20 0 17.3137 0 14V6Z" fill="#F9F5FF"/>
              <path d="M5.91669 10H14.0834" stroke="#7F56D9" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M6 1H14V-1H6V1ZM19 6V14H21V6H19ZM14 19H6V21H14V19ZM1 14V6H-1V14H1ZM6 19C3.23858 19 1 16.7614 1 14H-1C-1 17.866 2.13401 21 6 21V19ZM19 14C19 16.7614 16.7614 19 14 19V21C17.866 21 21 17.866 21 14H19ZM14 1C16.7614 1 19 3.23858 19 6H21C21 2.13401 17.866 -1 14 -1V1ZM6 -1C2.13401 -1 -1 2.13401 -1 6H1C1 3.23858 3.23858 1 6 1V-1Z" fill="#7F56D9"/>
              </svg>
              </span>
              Company &DownArrow;
              </div></th>
            <th class="w-2/12 text-sm font-thin">
              License use
            </th>
            <th class="w-1/12 text-sm font-thin">Status</th>
            <th class="w-2/12 text-sm font-thin">Users</th>
            <th class="w-3/12 text-sm font-thin">About</th>
            <th class="w-1/12 text-sm font-thin"> </th>
          </tr>
        </thead>
        <tbody class="mt-10">
          <tr
            class="h-20"
            v-for="row in tableRows"
            :key="row.index"
          >
            <td class="font-bold">
              <label class="container pt-3">
                <div class="ml-8 flex w-full gap-x-4">
                <span class="">
                <img :src="row.companyImage" alt="">
              </span>
              <span>
                <h1 class="font-medium grey-text text-md">{{row.company}}</h1>
                <a href="" class="font-thin text-sm ash-text">{{row.companyLink}}</a>
              </span>
              </div>
                <input type="checkbox" checked>
                <span class="checkmark mt-5"></span>
              </label>
              
            </td>
            <td class="font-bold pt-3">
              <progress id="file" :value="row.license" max="100"> 32% </progress>
            </td>
            <td class="">
              <button :class="row.buttonColor" class="px-3 py-2">
                {{row.status}}
              </button>
            </td>
            <td><img :src="row.users" alt=""></td>
            <td>
              <span>
                <h1 class="font-medium grey-text text-md">{{row.aboutTitle}}</h1>
                <p class="font-thin text-sm ash-text">{{row.about}}</p>
              </span>
            </td>
            <td class="text-center">
              <div class="flex justify-end gap-x-6 mr-10">
                <span>
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M2.5 5.00001H4.16667M4.16667 5.00001H17.5M4.16667 5.00001V16.6667C4.16667 17.1087 4.34226 17.5326 4.65482 17.8452C4.96738 18.1577 5.39131 18.3333 5.83333 18.3333H14.1667C14.6087 18.3333 15.0326 18.1577 15.3452 17.8452C15.6577 17.5326 15.8333 17.1087 15.8333 16.6667V5.00001H4.16667ZM6.66667 5.00001V3.33334C6.66667 2.89131 6.84226 2.46739 7.15482 2.15483C7.46738 1.84227 7.89131 1.66667 8.33333 1.66667H11.6667C12.1087 1.66667 12.5326 1.84227 12.8452 2.15483C13.1577 2.46739 13.3333 2.89131 13.3333 3.33334V5.00001M8.33333 9.16667V14.1667M11.6667 9.16667V14.1667" stroke="#667085" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                </span>
                <span>
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M14.1667 2.5C14.3855 2.28113 14.6454 2.10752 14.9313 1.98906C15.2173 1.87061 15.5238 1.80965 15.8333 1.80965C16.1429 1.80965 16.4493 1.87061 16.7353 1.98906C17.0213 2.10752 17.2811 2.28113 17.5 2.5C17.7189 2.71887 17.8925 2.97871 18.0109 3.26468C18.1294 3.55064 18.1903 3.85714 18.1903 4.16667C18.1903 4.4762 18.1294 4.7827 18.0109 5.06866C17.8925 5.35463 17.7189 5.61447 17.5 5.83334L6.24999 17.0833L1.66666 18.3333L2.91666 13.75L14.1667 2.5Z" stroke="#667085" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                </span>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
        <div class="hidden lg:flex justify-between px-8 py-4  talent-table">
          <div class="flex gap-x-4">
            <button class="btn-primary gray-text bg-white flex p-2">
          <a href="#" class="px-2 gray-text">Previous</a>
        </button>
        <button class="btn-primary gray-text bg-white flex p-2">
          <a href="#" class="px-2 gray-text">Next</a>
        </button>
          </div>
          <p class="gray-text text-sm">Page 1 of 10</p>
        </div>
      </div>
      <div class="lg:hidden flex w-full justify-between py-4 page">   
      <button class="gray-text bg-white">
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12.8334 7.00002H1.16669M1.16669 7.00002L7.00002 12.8334M1.16669 7.00002L7.00002 1.16669" stroke="#667085" stroke-width="1.67" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </button>
          <p class="gray-text text-sm">Page 1 of 10</p>
          <button class="gray-text bg-white">
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M1.16669 7.00002H12.8334M12.8334 7.00002L7.00002 1.16669M12.8334 7.00002L7.00002 12.8334" stroke="#667085" stroke-width="1.67" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </button>
        </div>
    </div>
  </Layout>
</template>

<script>
import detailCard from '../components/detailCard';
export default {
  name: 'IndexPage',
  components: {
    detailCard
  },
  data(){
    return{
      cards: [
        {
          title: "Total customers",
          percent: 40,
          figure: 2420,
          graphImage: "_Chart.png",
          arrowImage: "arrowup.png",
          textColor: "text-success"
        },
        {
          title: "Members",
          percent: 10,
          figure: 1210,
          graphImage: "_Chart2.png",
          arrowImage: "arrowndown.png",
          textColor: "text-error"
        },
        {
          title: "Active now",
          percent: 20,
          figure: 316,
          graphImage: "_Chart.png",
          arrowImage: "arrowup.png",
          textColor: "text-success"
        }
      ],
      tableRows: [
        {
          company: "Catalog",
          companyLink: "catalogapp.io",
          companyImage: "company.png",
          license: 80,
          status: "customer",
          users: "Avatars1.png",
          aboutTitle: "Content curating app",
          about: "Brings all your news into one place",
          buttonColor: "status-btn"
        },
        {
          company: "Circooles",
          companyLink: "getcircooles.com",
          companyImage: "company2.png",
          license: 70,
          status: "Churned",
          users: "Avatars2.png",
          aboutTitle: "Design software",
          about: "Super lightweight design app",
          buttonColor: "status-btn2"
        },
        {
          company: "Command+R",
          companyLink: "cmdr.ai",
          companyImage: "company3.png",
          license: 80,
          status: "customer",
          users: "Avatars3.png",
          aboutTitle: "Data prediction",
          about: "AI and machine learning data",
          buttonColor: "status-btn"
        },
        {
          company: "Hourglass",
          companyLink: "hourglass.app",
          companyImage: "company4.png",
          license: 90,
          status: "customer",
          users: "Avatars4.png",
          aboutTitle: "Productivity app",
          about: "Time management and productivity",
          buttonColor: "status-btn"
        },
        {
          company: "Layers",
          companyLink: "getlayers.io",
          companyImage: "company5.png",
          license: 30,
          status: "Churned",
          users: "Avatars4.png",
          aboutTitle: "Web app integrations",
          about: "Connect web apps seamlessly",
          buttonColor: "status-btn2"
        },
        {
          company: "Quotient",
          companyLink: "quotient.co",
          companyImage: "company6.png",
          license: 20,
          status: "customer",
          users: "Avatars5.png",
          aboutTitle: "Sales CRM",
          about: "Web-based sales doc management",
          buttonColor: "status-btn"
        },
        {
          company: "Sisyphus",
          companyLink: "sisyphus.com",
          companyImage: "company7.png",
          license: 50,
          status: "customer",
          users: "Avatars7.png",
          aboutTitle: "Automation and workflow",
          about: "Time tracking, invoicing and expenses",
          buttonColor: "status-btn"
        },
      ]


    }
  }
}
</script>
<style>
  div{
    font-family: 'Inter', sans-serif;
  }
  .gray-text{
    color: #344054;
  }
  .grey-text{
    color: #101828;
  }
  .ash-text{
    color: #667085;
  }
  .btn-primary{
    border: 1px solid #D0D5DD;
    box-sizing: border-box;
    box-shadow: 0px 1px 2px rgba(16, 24, 40, 0.05);
    border-radius: 8px;
    
    display: flex;
  }
  .btn-secondary{
    color: #6941C6;
    background: #F9F5FF;
    border: 1px solid #F9F5FF;
    box-sizing: border-box;
    box-shadow: 0px 1px 2px rgba(16, 24, 40, 0.05);
    border-radius: 8px;
    display: flex;
  }
  .table-container{
    background: #FFFFFF;
    box-shadow: 0px 4px 8px -2px rgba(16, 24, 40, 0.1), 0px 2px 4px -2px rgba(16, 24, 40, 0.06);
    border-radius: 8px;
    border: 1px solid #EAECF0;
  }
  .talent-table {
  border-collapse: collapse;
  margin-top: 12px;
  width: 100%;
  border-radius: 6px;
}
tr:nth-child(odd) {background: #F9FAFB;}
@media screen and (max-width: 640px) {
  .talent-table {
    width: 200%;
    
  }
  .table-container {
    max-width: 100%;
    overflow-x: auto;
  }
  /* width */
  .table-container::-webkit-scrollbar {
    width: 5px;
  }

  /* Track */
  .table-container::-webkit-scrollbar-track {
    background: #f1f1f1; 
  }
  
  /* Handle */
  .table-container::-webkit-scrollbar-thumb {
    background: #888; 
  }

  /* Handle on hover */
  .table-container::-webkit-scrollbar-thumb:hover {
    background: #555; 
  }
}
@media screen and (max-width: 540px) {
  .talent-table {
    width: 320%;
    
  }
  .table-container {
    max-width: 100%;
    overflow-x: auto;
  }
  
}
/* Custom checkbox */
/* The container */
.container {
  display: block;
  position: relative;
  cursor: pointer;
  margin-left:20px;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

/* Hide the browser's default checkbox */
.container input {
  position: absolute;
  opacity: 0;
  cursor: pointer;
  height: 0;
  width: 0;
}

/* Create a custom checkbox */
.checkmark {
  position: absolute;
  top: 0;
  left: 0;
  width: 20px;
  height: 20px;
  background: #FFFFFF;
  border-radius: 6px;
  border: 1px solid #D0D5DD;
}


/* When the checkbox is checked, add a blue background */
.container input:checked ~ .checkmark {
  background-color: #F9F5FF;
  border: 1px solid #7F56D9;
}

/* Create the checkmark/indicator (hidden when not checked) */
.checkmark:after {
  content: "";
  position: absolute;
  display: none;
}

/* Show the checkmark when checked */
.container input:checked ~ .checkmark:after {
  display: block;
}

/* Style the checkmark/indicator */
.container .checkmark:after {
  left: 7px;
  top: 4px;
  width: 4px;
  height: 8px;
  border: solid #7F56D9;
  border-width: 0 2px 2px 0;
  -webkit-transform: rotate(45deg);
  -ms-transform: rotate(45deg);
  transform: rotate(45deg);
}
progress{
  color: #7F56D9;
  width: 100px;
}
progress[value]::-webkit-progress-value {
    background-image: #7F56D9;
    border-radius: 4px; 
    height: 8px;
}
progress::-webkit-progress-value { background: #7F56D9; }
progress::-moz-progress-bar { background: #7F56D9; }
progress[value]::-webkit-progress-bar {
  background-color: #F9F5FF;
  border-radius: 4px;
  height: 8px;
}
.status-btn{
font-family: Inter;
font-style: normal;
font-weight: 500;
font-size: 12px;
line-height: 18px;
text-align: center;
background: #ECFDF3;
border-radius: 16px;
color: #027A48;
}
.status-btn2{
font-family: Inter;
font-style: normal;
font-weight: 500;
font-size: 12px;
line-height: 18px;
text-align: center;
background: #F2F4F7;
border-radius: 16px;
color: #344054;
}
.page{
  border-top: 1px solid #EAECF0;
}
</style>
