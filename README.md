# JaeHyeon
SETAS Tech Fair 2022
 

Final Project Report:
IT Solutions for Book Icons


Date: March 30, 2022


Introduction
Our company provides network-related IT (Information Technology) technical support services which are necessary for customer organizations to achieve their business goals. Our aim is to provide a high-level network up-grade solution using the knowledge, tools and techniques garnered from our CNET courses. The solution is geared to enhance the IT infrastructure, services and network backbone which are essential for our customer’s organizations to achieve their business goals. We will focus on implementing VoIP services, enterprise WAN network, a server farm and a robust security infrastructure and a hybrid cloud hot backup.
Technical Section
List of Hardware and Software:

Hardware: 
Equipment Name	Type
Cisco 8600 Router	Network Router
Cisco 9300/9200-48 E Switch	Network Switch
Firewall-Firepower 2130	Security Console
Cisco Meraki MX80 Wireless Controller	Wireless Controller
Cisco Meraki MR42 Wireless Access Point	Access Point
Dell PowerEdge R620	Server
Cisco UCS C240 M5 Rack Server	Server

Software:
Applications 

	Category 
Windows Active Directory	Security and Control
Windows 10 PRO	Operating System
Windows Server 2016 Enterprise	Server
Website	Web application
Cisco IP Phone Server	Collaboration

End-Devices:
Equipment Name	Type
Cisco 7841 IP Phone	IP Phone
Dell Inspiron 15 Laptop	Laptop
Dell Inspiron Desktop	PC 

Hardware/Device Specification
•	Dell PowerEdge R620
 
Product Specification
Form Factor	1U rack
Processors	Intel Xeon processor E5-2600 and 2600 v2 product families
Processor sockets	2 sockets
Internal interconnect	2 Intel Quick Path Interconnect (QPI) Links: 6.4GT/s, 7.2GT/s, 8.0GT/s
Cache	2.5 MB per core; core options: 4,6,8,10,12
Chipset	Intel C602
Memory	Up to 768GB (24DIMM slots)

•	Cisco UCS C240 M5 Rack Server
 
Product Specification
Form Factor	2RU rack server
Processors	Intel® Xeon® Scalable processors (1 or 2) or second-generation Intel Xeon Scalable processors
Processor sockets	2 sockets
Power Supplies	Hot-pluggable, redundant 770W AC, 1050W AC, 1050W DC and 16000W AC
PCIe expansion	6 PCIe 3.0 slots plus 1 dedicated 12-Gbps RAID controller slot and 1 dedicated mLOM slot
Memory	24 DDR4 DIMM slots: 8, 16, 32, 64, and 128 GB and up to 2666 MHz
Support for the Intel Optane DC Persistent Memory (128G, 256G, 512G)


•	Firewall-Firepower 2130
 
Performance Specification
Throughput: FW + AVC (1024B)	5.4Gbs
Maximum concurrent sessions, with AVC	2 million
TLS	760 Mbps
Throughput: IPS (1024B)	1.9Gbps
Maximum VPN Peers	7500
Cisco Firepower Device Manager (local management)	Yes
We use Firepower 2130 for improved security and maintain high-level network performance. The Firepower 2100 series features an innovative dual-core CPU architecture that simultaneously optimizes security system, encryption, and threat investigation capabilities, which can enhance security without compromising network performance.
•	Cisco Catalyst 9300
 
Product Specification
Design to replace	Cisco Catalyst 3850
ACL scale entries	5,120
Total number of IPv4 routes (ARP plus learned routes)	32,000 (24,000 direct routes and 8000 indirect routes
IPv6 routing entries	16,000
Switching capacity	208 Gbps - 640 Gbps
Packet buffer per SKU	16 MB buffer for 24- or 48-port Gigabit Ethernet models
VLAN IDs	4094
ACL scale entries	1,600
•	Cisco Catalyst 9200-48 port
 
Product Specification
Default primary AC power supply	PWR-C6-1KWAC
ACL scale entries	1,600
Total number of IPv4 routes (ARP plus learned routes)	14,000 (10,000 direct routes and 4,000 indirect routes
IPv6 routing entries	2,000
Switching capacity	176 Gbps
Packet buffer per SKU	6 MB buffers for 24- or 48-port Gigabit Ethernet models
VLAN IDs	4096
ACL scale entries	1,600

•	Cisco Meraki MX80 Wireless Controller
 
Product Specification
Recommended use cases	Medium sized branch
Recommended max user
	100
Stateful Firewall Throughput	250 Mbps
Advanced Security Throughput	80 Mbps
Maximum VPN sessions	50
Interfaces	5 x GbE
We use the Cisco Meraki MX80 Wireless Controller to check the status of access points and manage or control them. 

•	Cisco Meraki MR42 Wireless Access Point
 
Product Specification
Usage	General purpose 802.11ac wave 2 for campus and enterprise, with external antenna option.
Radio specification	One 802.11b/g/n One 802.11a/n/ac One WIDS/WIPS One Bluetooth® radio 1.9 Gbit/sec max rate Three 3:3 MU-MIMO with beamforming
Interface	One Gigabit Ethernet port
Power	802.3af/at PoE or DC power adapter
Performance features 	Three 3:3 MU-MIMO Priority voice, power save (802.11e/WMM) Hardware-accelerated encryption Band steering Removable antennas (MR42E)
Weight	25 oz (0.7 kg)

Software Specification
•	Windows Servers 2016 Standard
•	Windows 10 Professional
•	Active directory
We have adopted Windows server 2016 as Book icon's Windows server, and user workstations on 7 sites are based on Windows 10 Professional. We configured an active directory on the Windows server, which made it easy for bookicons domain network administrators to manage or deploy dns-based naming, network changes, security policy changes, and remediation for all user workstations and VMs connected to the domain

Topology

Ajax HQ Office
▫	2-tier Hierarchical network design topology
▫	Core/Distribution Layer
Core switch
Distribution layer-WLAN controller
▫	Access Layer
Connected to core switch
Access points in WLAN Network
End-point device: PCs and IP Phone for each department

Remote site Offices
▫	2-tier Hierarchical network design topology
▫	Core/Distribution Layer
Core switch
Distribution layer-WLAN controller
▫	Access Layer
Connected to core switch
Access points 
End-point device: PCs and IP Phone for each department

Physical Topology
Bookicons MPLS Network
 

Book Icons Private Cloud
 
Ajax LAN/WLAN Network
 
 
Toronto LAN/WLAN Network
 

Mississauga LAN/WLAN Network
 
Montreal LAN/WLAN Network
 
Quebec City LAN/WLAN Network
 
Edmonton LAN/WLAN Network
 
Calgary LAN/WLAN Network
 
Logical Topology
 
 
Network Virtualization and Cloud
The Cloud infrastructure was implemented using ESXi for the private cloud that virtualizes all the servers into one bare-metal machine. 
Resource	Server	Environment	Services 
Dell PowerEdge R620	Database & File Server	VMWare ESXi 6.5 	SQL, FTP, TFTP, SFTP
Dell PowerEdge R620
	Application and VOIP (Voice Over Internet Protocol) Servers	VMWare ESXi 6.5	Web applications, DNS (Domain Name System), HTTP, HTTPS, Azure Gateway Services
Dell PowerEdge R620
	Windows 2016 Server/WSUS	VMWare ESXi 6.5	Windows Update Services, Active Directory Services, RDP
Installation of Windows Server on ESXi:
Step 1:
Launch ESXi application and select Virtual Machines. In the List of machines pane, select Create/ Register VM (Virtual Machine)  

Step 2:
Select Create a new Virtual Machine and click next
 
Step 3:
Enter the name of your machine and select the following:
Compatibility - ESXi 6.5 Virtual Machine
Guest OS (Operating System) family – Windows
Guest OS Version – Windows 10 Professional
Then click next
 
Step 4: 
Select the datastore for the VM and select next
 
Step 5:
Customize the machine by providing the resources that the machine will use. Then select CD/DVD Drive 1 to select the OS for the system to run on.
 
Step 6:
Search for the location of your ISO file, if not already uploaded to your datastore, select the upload button, and upload the file from an external source, and then select finish in the customization window. 
 
Step 7: 
Power on the machine from the ESXi interface
 

Step 8: 
Complete the installation of the Windows Server
 

Shared Storage 
 
Step1: Add Roles and Features Wizard, check the File and Storage Services and file and iscsi inside check the file server Resource Manager 
 
Step2: Next and install.
 
Step3: On Server Manager, go file and Storage Services, and click the Share.
 Step4: Right Click and press new share and click the next.
 
 
Step5: Click the Type a custom path and navigate the create folder
 
Step6: press next and next, on the permissions, press customize permissions button.
 
Step7: press Add and press select a principal. 
 Step7: In the Enter the object name to select box, type the User or Group name
And give permission, and as same way, give share permission on share tab. After do
 
Result: Toronto_Admin Desktop access the share folder
 
Result:  Aax it department 2 setting of permission
 
Result:  Aax it department 2 setting of Share
 
Result: Calgary_Admin Desktop access the share folder
 Result:  Calgary it department 2 setting of permission
 
Result:  Calgary it department 2 setting of Share
 
Result: Edmonton_Admin Desktop access the share folder
 
Result:  Edmonton IT department 2 setting of permission.
 
Result:  Edmonton it department 2 setting of Share
 
Result: Mississauga_Admin Desktop access the share folder
 Result: Mississauga it department 2 setting of Permission
 
Result: Mississauga it department 2 setting of Share
 
Result: Montreal_Admin Desktop access the share folder
 
Result: Montreal it department 2 setting of Permission
 
Result: Montreal it department 2 setting of Share
 
Result: Quebec_Admin Desktop access the share folder
 
Result: Quebec it department 2 setting of Permission
 
Result: Quebec it department 2 setting of Share
 
Result: Toronto_Admin Desktop access the share folder

 
Result: Toronto it department 2 setting of Permission
 
Result: Toronto it department 2 setting of Share
VoIP
A PBX IP phone system was configured and implemented using the Cisco VOIP services (Configured on the Cisco 2811 series router – Demonstration Purposes). This was done to satisfy the requirement for telephony services between sites. The system was configured to scale to a quantity of 50 devices at the remote sites based on operations and staffing and 1000 at the HQ. 
The configuration for the VOIP service is shown below:
  
 
 

 
WLAN
*All attached screenshots for WLAN configuration steps are Ajax Site’s WLAN configurations.
Step 1: Connect SW3(in WLAN cluster) to CoreSwitch
SW3(g0/1) -Ajax Core Switch (g1/0/7) /Other sites Core Switch(g1/0/4)
 

Step 2: Configure DHCP pool on Core Switch and VLAN on Core Switch and VLAN
 
 
Step 3: Change the mode of the CoreSwitch switchport connected to SW3 to trunk
 
Step 4: Change the mode of SW3 switchports connected to APs to trunk
 

Step 5: Change the SW3 f0/24 and g0/1 switchport mode to trunk
SW3 f0/24 (connected to WLC)	
 
SW3 g0/1 (connected to Core Switch)	
 
Step 6: Connect WLC to SW3 and WLC-PC
SW3(Fa0/24)-WLC(Gig1) -> VLAN500(Staff)
SW3(Fa0/1)-WLC(Gig3) -> VLAN501(Guest)
 
Step 7: Configure the IP address of WLC
 
Step 8: Configure the IP address of WLC-PC
 
Step 9: Create an admin account
WLC-PC>Desktop>Web Browser >type WLC IP add
Set the Admin username: admin
Password: Pa$$w0rd 
and then click “Start”
 
Step 10: Set up the Ajax Wireless Controller
 
Step 11: Create the WLAN for Staff
Network name: [Site name] _Staff
Passsphrase:123456789
and click next
 
Through this setting, we created the 'Ajax_Staff' network with the authentication method WPA2-PSK and password is 123456789. PSK is an authentication method that allows AP access based on a pre-shared key between a client device and an AP without an authentication server and WPA2 is a security authentication protocol performed by Wi-Fi and follows the AES standard.
Step 12: Leave this field as default and click “Next”
 

Step 13: Apply the setting
 
Step 14: Ping to WLC from PC to activate WLC interface
 
Step 15: Log in to WLC interface
WLC-PC>Web Browser>type https://[WLC IP add]
 
Step 16: Make sure that all APs in WLAN network is connected to WLC 
 
The Ajax site, where the headquarters of Book Icons are located, has eight departments, and all the other sites except Ajax have three departments: IT, Operation, and POS. Since one AP is placed for each department, we must verify that eight APs are connected to the WLC on the WLC interface.
Step 17: Create new WLAN for Guest
‘WLANs’ tab>Click “Go” button next to the ‘Create new’
SSID: [Site name] _Guest
 
Step 18: Enable new SSID 
 
Step 19: Do not set any Layer 2 security to Guest WLAN
Security>Layer2>Layer2 Security: None
 
We have only encrypted the wireless network for the staff of the Book Icons and set the layer 2 security for guests to none. Guests can access the network without any authentication. However, they will never have access to wireless networks for staff.
Advanced>Check FlexConnect Local Switching, FlexConnext Local Auth
 
Step 20: Create Guest interfaces on WLC
‘Controller’ tab>Interfaces>Click “New” 
Interface Name: Guest
Vlan ID: 501
Change the ‘Port Number’ to 3
 
 
Step 21: Verify that all APs obtain IP addresses from the DHCP pool on the core switch.
Click AP>Config>Settings>Click “DHCP”
  
Step 22: Add two wireless client devices to test Staff and Guest WLAN
Wireless client device>Config>Wireless0
For the Guest device,
SSID: [Site name] _Guest 
Authentication: Disabled (There is no layer 2 security for guest WLAN)
Click “DHCP” on IP Configuration box 
 
Guests can connect to the wireless network by entering the correct network SSID for the guest without any authentication.
For the Staff device.
SSID: [Site name] _Staff
Authentication: 123456789
Click “DHCP” on IP Configuration box
 
However, all staffs in Book Icons can access to the wireless staff network through entering the encryption key configured in the WLC interface. After setting the authentication method to WPA2-PSK, enter the previously set password 123456789 in the PSK Pass Phase box.
Step 23: Try to ping VLAN 101 gateway and IT_PC from Ajax to check the connection
Staff laptop connects to Ajax_Staff can ping gw and IT_PC
 
Guest laptop connects to Ajax_Guest can ping gw but cannot access IT_PC
 
Both wireless client devices must try to ping the gateway of VLAN (VLAN 101) and PC for the Ajax IT department to check the connection status. Laptops connected to staff networks must successfully ping to both Ajax IT department’s gateways and PC, and guest laptop must never be connected to IT_PC. You can configure ACLs to prevent clients connected to the guest network from accessing the staff network. Please refer to the description for the ACL configuration.

Security and Authentication 
Several security features were configured and implemented as a part of the solution to ensure an optimized, secure, and resilient network infrastructure some. These are:
•	Active Directory – Provide Role-based access and authentication to devices and service.
•	VLANs – To segment user traffic and improve network performance
•	NAT – To secure private addressing space from the public Internet
•	IPSEC VPN Tunnel – Provide a secure, encrypted channel to our backup and disaster recovery service 
•	Access Control Lists – Configured to deny or permit authorized addresses to access other internal resources or services
•	Authentication and Authorization – To ensure only authorized users are grated access to resources 
•	Encryption – To protect the integrity and confidentiality of internal and external traffic in/out of the network 



NAT:
Configuration and Test Results:
 
 
 




IPSEC VPN TUNNEL:
Configuration and Test Results:
 
 
 

 
Active Directory
Configuration and Test Results:
Step 1: Login to the server
Step 2: Launch the Server Manager Dashboard>Manage>Add Roles and Features
 
Step 3: Select ‘Role-based or feature-based installation’ option
 
Step 4: Select the local server
 
Step 5: Check ‘Active Directory Domain Services’ to add server roles
 
Step 6: Leave it as default, and click ‘Next’
 
Step 7: Click ‘Install’ 
 
Step 8: Click ‘Promote this server to domain controller’ 
 
Step 9: Select ‘Add a new forest’ 
Root domain name: bookicons.com
 
Step 10: Leave everything as default and set the DSRM password
	Password: Pa$$w0rd
 
Step 11: Wait until NetBIOS domain name is automatically created
 
Step 12: Wait until prerequisites check is completed and click ‘Install’
 
Step 13: Tools>Active Directory Users and Computers
 
Step 14: Add domain users 
Expand bookicons.com>Right Click ‘Users’> ‘New’ > ‘User’
 
Step 15:  Put the user name and user logon name 
	Hanui Lee: hlee@bookicons.com
	Gavin Beckford: gbeckford @bookicons.com
	Jaehyeon Jeon: jjeon@bookicons.com
	Gregorie Sanche: gsanche @bookicons.com
 
Step 16:  Set the password for domain user
Password: Pa$$w0rd
 
Step 17:  Review the setting you had made and click ‘Finish’
 
Step 18: Add organization unit
 Right click bookicons.com> ‘New’ > ‘Organizational Unit’
 
Step 19: Change the name of organization unit
Name it to [Site name] ex) Ajax, Toronto
Uncheck ‘Protect container from accidental deletion’ and click ‘OK’
 
Step 20: Add a group on organizational group
Right check Organizational group ‘Ajax’> ‘New’ > ‘Group
 
Step 21: Put the name of group and leave other settings as default
 
Step 22: Add user into group 
Group properties>Members>Add
Enter ‘Site name’ on ‘Enter the object name to select’ box
Click ‘Check Names’ next to the box 
 
Step 23: Click the user you created previously and click ‘OK’
 
Step 24: Make sure that user added to group and click ‘Apply’
. 
	Ajax: Hanui Lee
	Toronto: Gavin Beckford
	Mississauga: Jaehyeon Jeon
	Calgary: Gregorie Sanche
Step 25: Turn on the Windows 10 Desktop and change adapter setting
Select ‘Use the following DNS server address’
Add the IP address of server (172.26.0.10) to ‘Preferred DNS server’ box
 
Step 26: Click ‘Search’ on start menu and type ‘Join a domain’
Click ‘Change’ 
 
Step 27: For the ‘Member of’ box, select ‘Domain’
Type ‘bookicons.com’ in the box 
 
Step 28: Put user logon name and password you previously configured
ex) user logon name: hlee
password: Pa$$w0rd
 
Step 29: Your desktop is connected bookicons.com domain
 
Step 30: Click ‘OK’ when this message appears 
 
Step 31: Restart the desktop VM
 
Step 32: Logon with domain user credentials
Click ‘Other user’
user logon name: hlee
password: Pa$$w0rd
 
Step 33: Make sure that Windows 10 desktop VM joins a bookicons.com domain with proper 	domain user account
 
 


Web Service
Configuration and Test Results:
Web Server (IIs)
 
Step1: Click the Add roles and Features Wizard.
 
Step2: In Select server role, check the Web Server (IIS)
 
Step3: In Select features, check the IIS Hostable Web Core and click Next, Install
 
Step4: In IIS tab, right click at Server Name, and click on Internet Information Services(iis) Manager
 
Step5: Copy web coding file to C:\inetpub\wwwroot
 
Step6: Go site and Default website page, and click the Default Document
 
 Step7: Right Click and press Add button, and type Home (Home page name).html
 
Step8: Right click the Default Web Site
 
Step9: In ip address change to All Unassigned to Server ip address and type the URL address.
 
Step10: Go Windows -> System32 -> drivers -> etc and open the host file, in the bottom add the Server ip address with URL address.
 
Step11: In the internet Information Serveries (iis) Manager, press start or Restart button
 
Step12: On the right side in the Actions, Press (URL) on (Server Ip address) http. In this case, www.HGJbookcions.com on 172.26.0.10:80 (http). As a result, we can see home page in browser

HTML5 CSS, JavaScript
 
 
 
 
 


HTML5 Coding
Home.html
Home page part
  

For title page, we put in HGJ Cencol Solution Bookstore, so we can check the name on the Internet tab.
In the link part, it brings up a CSS file named SearchStyle, so the settings named in all classes are migrated to the coding in this file. in the navigation area, Change the top margin to 10px, vertical column to horizontal column, display | on the left side of each menu (category display), font setting - 12px in bold, menu spacing, menu sorting, delete the leftmost |. as a result, head part is done.
 
  

In the first line from page, output the Book Icon according to the setting Class="title".
Use div to define the first area and follow the search settings and create a search window using i tag. Follow the fas fa-search, fas fa-keyboard, and fas fa-microphone settings, respectively.
Use div to define the first area and follow the Menmubar settings, and create a navigation tag, follow the Manubar settings, and press three buttons to create a home page and a books page and about us.html to move to home.html.
Use div to create an area, follow the main setting, output log in, follow the logo setting, and then use div to create a sub-area and follow the container setting with have an id tag, create a window that can be input, and the class follows the account, and it has a pass setting tag and the class follows the account.
Create a button below it, and the id follows login. At this time, class has an account, and the text statement shown is login. Use p to define a paragraph and follow the alert with id with class = account. This is a message according to the result after entering it. To activate the login window feature, load a JavaScript file with the script.js source.

 
The div with the outermost region is defined, and the class follows test1.
Declare an area with detailed settings of the outermost area, and class follows test2-1.
For the newly created area within the created area, the div is redefined, and the class follows test3-1.
Use div to create a region, and class defines the setting values according to box1-1.

Print out the text "Popular Kid Book" as the title. Below that, print out Here are children's favorite books as the body content. Create the button that follows the class "cleck" through "ui".
Show the Click here text, if users have the text to display and press it, it will go to a file named Kinds books.html, which is a book page. Set the div area to the right. Class follows box1-2. It brings up the image. The source is a file named p4.jpg with the class setting follows box2-2.
 
After spacing, follow box1-2 setting through class through div commend, and p3.jpg. Create an image with a jpg source and follow the box2-2 setting for class. Output text with the heading All Major Books under the image and print “Are you looking from college books?” with the small font size function of h5-1. Show the Click here text, if users have the text to display and press it, it will go to a file named Kinds books.html
Create the box2-2 setting through class through div commend, and p4.jpg. Create an image with a jpg source and follow the box2-2 setting for class. Output text with the heading All Language in the world under the image and print “Learn a new language this year” with the small font size function of h5-1. Show the Click here text, if users have the text to display and press it, it will go to a file named Kinds books.html



Create the box2-2 setting through class through div commend, and p5.jpg. Create an image with a jpg source and follow the box2-2 setting for class. Output text with the heading Popular Magazine under the image and print “Are you curious these day trend?” with the small font size function of h5-1. Show the Click here text, if users have the text to display and press it, it will go to a file named Kinds books.html
 
This concludes home.html coding.

Books Page part
  
The head part is the same as before. we put in HGJ Cencol Solution Bookstore, so we can check the name on the Internet tab.
In the link part, it brings up a CSS file named SearchStyle, so the settings named in all classes are migrated to the coding in this file. in the navigation area, Change the top margin to 10px, vertical column to horizontal column, display | on the left side of each menu (category display), font setting - 12px in bold, menu spacing, menu sorting, delete the leftmost |. as a result, head part is done.





  
In the first line from page, output the Book Icon according to the setting Class="title".
Use div to define the first area and follow the search settings and create a search window using i tag. Follow the fas fa-search, fas fa-keyboard, and fas fa-microphone settings, respectively.
Use div to define the first area and follow the Menmubar settings, and create a navigation tag, follow the Manubar settings, and press three buttons to create a home page and a books page and about us.html to move to home.html.



  
The div with the outermost region is defined, and the class follows test1.
Declare an area with detailed settings of the outermost area, and class follows test2-1.
For the newly created area within the created area, the div is redefined, and the class follows test3-1. Print Popular Kid Book as the subject of this area.
Create the box1-2 setting through class through div commend, and Where's Spot.png. Create an image with a jpg source and follow the box2-2 setting for class. Output text with the heading Where's Spot? under the image and print “by Hill, Eric” with the small font size function of h5-1. Show the Click here as text.
Create the box2-2 setting through class through div commend, and Spot, the Cat.png. Create an image with a jpg source and follow the box2-2 setting for class. Output text with the heading Spot, the Cat under the image and print “by Cole, Henry” with the small font size function of h5-1. Show the Click here as text.
Create the box3-2 setting through class through div commend, and A Surprise  Visitor.png. Create an image with a jpg source and follow the box2-2 setting for class. Output text with the heading A Surprise Visitor under the image and print “by Cole, Henry” with the small font size function of h5-1. Show the Click here as text.
 
The div with the outermost region is defined, and the class follows test1.
Declare an area with detailed settings of the outermost area, and class follows test2-1.
For the newly created area within the created area, the div is redefined, and the class follows test3-1. Print Language BooK as the subject of this area.
Create the box1-2 setting through class through div commend, and I Love Korean.jpg. Create an image with a jpg source and follow the box2-2 setting for class. Output text with the heading I Love Korean under the image and print “The series of short-term” with the small font size function of h5-1. Show the Click here as text.
Create the box2-2 setting through class through div commend, and Spot, the Macmillan English.jpg. Create an image with a jpg source and follow the box2-2 setting for class. Output text with the Macmillan English 1 under the image and print “Language Book Paperback” with the small font size function of h5-1. Show the Click here as text.
Create the box3-2 setting through class through div commend and Learn French.jpg. Create an image with a jpg source and follow the box2-2 setting for class. Output text with the heading Learn French under the image and print “6 Books in 1” with the small font size function of h5-1. Show the Click here as text.
 
The div with the outermost region is defined, and the class follows test1.
Declare an area with detailed settings of the outermost area, and class follows test2-1.
For the newly created area within the created area, the div is redefined, and the class follows test3-1. Print Popular Magazine as the subject of this area.
Create the box1-2 setting through class through div commend, and In Vogue.png. Create an image with a jpg source and follow the box2-2 setting for class. Output text with the heading In Vogue under the image and print “most Famous Fashion Magazine” with the small font size function of h5-1. Show the Click here as text.

Create the box2-2 setting through class through div commend, and Spot, the Macmillan Dazed Magazine.jpg. Create an image with a jpg source and follow the box2-2 setting for class. Output text with Dazed Magazine under the image and print “most influential independent fashion” with the small font size function of h5-1. Show the Click here as text.
Create the box3-2 setting through class through div commend, and 100 Years of Fashion.jpg. Create an image with a jpg source and follow the box2-2 setting for class. Output text with the heading Learn French under the image and print “100 Years of Fashion documents” with the small font size function of h5-1. Show the Click here as text.
This concludes books page coding.

 
About us page
  
The head part is the same as before. we put in HGJ Cencol Solution Bookstore, so we can check the name on the Internet tab.
In the link part, it brings up a CSS file named SearchStyle, so the settings named in all classes are migrated to the coding in this file. in the navigation area, Change the top margin to 10px, vertical column to horizontal column, display | on the left side of each menu (category display), font setting - 12px in bold, menu spacing, menu sorting, delete the leftmost |. as a result, head part is done.
  
In the first line from page, output the Book Icon according to the setting Class="title".
Use div to define the first area and follow the search settings and create a search window using i tag. Follow the fas fa-search, fas fa-keyboard, and fas fa-microphone settings, respectively.
Use div to define the first area and follow the Menmubar settings, and create a navigation tag, follow the Manubar settings, and press three buttons to create a home page and a books page and about us.html to move to home.html.

  
The div with the outermost region is defined, and the class follows test1.
Declare an area with detailed settings of the outermost area, and class follows test2-1.
For the newly created area within the created area, the div is redefined, and the class follows test3-1.
Use div to create a region, and class defines the setting values according to box1.
Class follows box1-1. It brings up the image. The source is a file named cap.jpg with the class setting follows box2-2.
Print out the text "22W --Technologist Project (SEC. 004) " as the title. Below that, print out explanation of our Capstone project. as the body content. 

CSS
 
Firstpara is the body of about us page. The color of the text is black, and the element is displayed as a block. The space around is automatically set to the left of the character alignment.
Title, Title2, and Title3 are each character settings for the h tag. Title2 is a subject in div and has a large font size. And it is always in the center.
 
Munubar is a sort setting for the page item menu. Block settings make it horizontal rather than vertical.
cleck is the setting for click here. The li tag automatically generates a ball on the left based on the default value, but I removed it with list-style: none.
 
Input, fa-search, keyboard, and microphone are settings for the search bar. Fa-search, keyboard, and microphone are each setting for the left magnifying glass, keyboard, and microphone.
 
Tests 1, 1-1, 2, and 3 are the div area settings in the body area on all pages. The size is large as a setting for the overall area where the content will be placed.
 
The box setting is the div area setting for placing content in the area that was caught in the test. If two contents are placed in one row, the size is 450x300, and if three contents are placed in one row, it is 300x300.
 
Configuration for login area.


Java script 
 
Get the id data value from the id tag.
Get the password data value from the password tag.

When the user presses the click button, the if statement is activated.
Login Successful if the ID is Admin password! print out the phrase
If the ID is Admin or password is incorrect, please check your ID and password will be printed.
If both the ID and the secret number are incorrect, the account does not exist. will be displayed.
If the ID is correct, but the password is incorrect more than 5 times, the phrase Error logging in 5 times, try to find the password.
 
Backup and Disaster Recovery
The availability, confidentiality, and integrity of data is critical to any modern organization. HGJ Cencol understands the importance of having a strategic and reliable backup and disaster recovery plan, and how that plan will protect Book Icons information and organisational assets, exacerbated by the fact that the organizations business model is ecommerce and requires a high availability environment. We will implement backup and recovery using warm backup site on the Microsoft Azure Cloud. Microsoft Azure offers end-to-end backup and recovery solutions over a secure, scalable, and cost-effective solution. 
 
 
N.B. The complete process could not be completed due to restrictions with student account 

Hardware Configuration Files:
Ajax:
    
Calgary: 
   
Edmonton:
   
Mississauga:
    
Montreal:
   
Quebec City:
   
Toronto:
   
Server Farm:
   

Internet gateway:
 
Public gateway:
 
Addressing Table:
 
