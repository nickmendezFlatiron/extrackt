# Extrackt

### Overview
- __Extrackt__ is an audio sample marketplace , where members can download royalty-free , commercially licensed audio sample files. The marketplace , called The Crate, is user curated. Anyone is allowed to contribute their own samples to the marketplace.

- __Extrackt__ gives all users an equal opportunity to upload their samples, and the community decides on which samples are the best. 

# Pages/Routes

 ***Note*** : each page features a navigation bar , which features links to the main pages and is based on the login status. 

### 1. Signup Page
![Signup Page](https://github.com/nickmendezFlatiron/extrackt/blob/main/readme_images/Signup.png)
- Before an Extrackt member has access to the complete site , a user is prompted to either login or signup to Extrackt. 
- Once a member logs in or signs up , they are redirected to their account page and authorized to view the site until they log out.

### 2. Account Login 
![Login Page](https://github.com/nickmendezFlatiron/extrackt/blob/main/readme_images/LoginModal.png)
- Members can log in from any page via the navigation bar modal. 

### 3.  Home Page
- The Home Page features a custom welcome message as well as an introduction to Extrackt

### 4. Account Page
![Account Page](https://github.com/nickmendezFlatiron/extrackt/blob/main/readme_images/account.png)
- The Account Page features an overview of a member's account.
- To delete your account and all associated data , click on the "delete my account" link

### 5. The Crate (Default View)
![The Crate](https://github.com/nickmendezFlatiron/extrackt/blob/main/readme_images/the-crate.png)
- The Crate allows users to dig through the sample database using the filters provided on the left-hand side. 
- The default view displays 10 Most Downloaded Sample Collections , as well as the 10 Most Recent Sample Collections
### 6. Audio Player Controller
-The audio plater appears whenever a member searches for a sample , opens a sample collection , or browses their downloads.
- A waveform renders for each sample loaded
- Click on the sample name on the right-hand side to navigate to the sample's associated collection 

### 7. The Create (Filter View)
- ![The Crate/Filter](https://github.com/nickmendezFlatiron/extrackt/blob/main/readme_images/filter-view.png)
- Once a member enters a search query, the results render on the right-hand side. 
- Click on any of the samples from the collection table and it will play
- Members have access to the Audio Player controller , and can download samples on demand

### 8. Marketplace Collections
- ![Collection View]()
- All samples for a given sample collection are displayed in this view. 
- Members have access to the Audio Player controller , and can download samples on demand

### 9. My Downloads
- ![Downloads](https://github.com/nickmendezFlatiron/extrackt/blob/main/readme_images/downloads.png)
- Members can view all of the samples they have downloaded in this view
- 15 samples appear at a time
- use the arrow buttons before and after the list at the right-hand side to browse through the next set of downloaded files.

### 10. My Uploads
- ![My Uploads](https://github.com/nickmendezFlatiron/extrackt/blob/main/readme_images/my-uploads.png)
- Members can view and manage all of their uploaded sample collections in this view

### 11. Edit Collection
- ![Edit Collection](https://github.com/nickmendezFlatiron/extrackt/blob/main/readme_images/edit-collection.png)
- once a member clicks on a collection , they can delete samples from the collection or update information about the collection

### 12. Upload
- ![Upload](https://github.com/nickmendezFlatiron/extrackt/blob/main/readme_images/upload-collection.png)
- Members can upload collections using the Upload form
- Click on the Help button for more information on properly uploading samples to the crate
- Each sample is tagged with multiple options , and the user selects the best suited options to describe their sample.
- Once a member has provided all of the required information , the collection is uploaded and available to the marketplace. 
- Any uploading errors are displayed if the collection does not successfully upload.


### 13. Sidebar
- ![SideBar](https://github.com/nickmendezFlatiron/extrackt/blob/main/readme_images/sidebar.png)
- sidebar is the main navigation element for a logged in user

### System dependencies
  - ruby 2.7.4
  - rails 7 
  - node v16.14.2
  - react 18

### Configuration and Setup
- Fork and clone this repository
- open the project file and run the following:
  - npm install --prefix client
  - bundle install
- after all packages are installed, run the servers in 2 different terminals
  - npm start --prefix client
  - rails s 

- Database creation
run the Following code to create a db:
- rails db:create db:migrate
 

### License - 3-Clause BSD License
* Copyright 2022 COPYRIGHT Nicholas Mendez - github: nickmendezFlatiron

* Redistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met:

1. Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer.

2. Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution.

3. Neither the name of the copyright holder nor the names of its contributors may be used to endorse or promote products derived from this software without specific prior written permission.

* THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.