const wellKnownPorts = {
    "1": [
        {
            "tcp": "Yes",
            "udp": "Assigned",
            "iana": "Official",
            "desciption": "TCP Port Service Multiplexer (TCPMUX). Historic. Both TCP and UDP have been assigned to TCPMUX by IANA,[1] but by design only TCP is specified.[6]",
            "sctp": ""
        }
    ],
    "5": [
        {
            "tcp": "Assigned",
            "udp": "Assigned",
            "iana": "Official",
            "desciption": "Remote Job Entry[7] was historically using socket 5 in its old socket form, while MIB PIM has identified it as TCP/5[8] and IANA has assigned both TCP and UDP 5 to it.",
            "sctp": ""
        }
    ],
    "7": [
        {
            "tcp": "Yes",
            "udp": "Yes",
            "iana": "Official",
            "desciption": "Echo Protocol[9][10]",
            "sctp": ""
        }
    ],
    "9": [
        {
            "tcp": "Yes",
            "udp": "Yes",
            "iana": "Official",
            "desciption": "Discard Protocol[11]",
            "sctp": "Yes [12]"
        },
        {
            "tcp": "No",
            "udp": "Yes",
            "iana": "Unofficial",
            "desciption": "Wake-on-LAN[13]",
            "sctp": ""
        }
    ],
    "11": [
        {
            "tcp": "Yes",
            "udp": "Yes",
            "iana": "Official",
            "desciption": "Active Users (systat service)[14][15]",
            "sctp": ""
        }
    ],
    "13": [
        {
            "tcp": "Yes",
            "udp": "Yes",
            "iana": "Official",
            "desciption": "Daytime Protocol[16]",
            "sctp": ""
        }
    ],
    "15": [
        {
            "tcp": "Yes",
            "udp": "No",
            "iana": "Unofficial",
            "desciption": "Previously netstat service[1][14]",
            "sctp": ""
        }
    ],
    "17": [
        {
            "tcp": "Yes",
            "udp": "Yes",
            "iana": "Official",
            "desciption": "Quote of the Day (QOTD)[17]",
            "sctp": ""
        }
    ],
    "18": [
        {
            "tcp": "Yes",
            "udp": "Yes",
            "iana": "Official",
            "desciption": "Message Send Protocol[18][19]",
            "sctp": ""
        }
    ],
    "19": [
        {
            "tcp": "Yes",
            "udp": "Yes",
            "iana": "Official",
            "desciption": "Character Generator Protocol (CHARGEN)[20]",
            "sctp": ""
        }
    ],
    "20": [
        {
            "tcp": "Yes",
            "udp": "Assigned",
            "iana": "Official",
            "desciption": "File Transfer Protocol (FTP) data transfer[10]",
            "sctp": "Yes [12]"
        }
    ],
    "21": [
        {
            "tcp": "Yes",
            "udp": "Assigned",
            "iana": "Official",
            "desciption": "File Transfer Protocol (FTP) control (command)[10][12][21][22]",
            "sctp": "Yes[12]"
        }
    ],
    "22": [
        {
            "tcp": "Yes",
            "udp": "Assigned",
            "iana": "Official",
            "desciption": "Secure Shell (SSH),[10] secure logins, file transfers (scp, sftp) and port forwarding",
            "sctp": "Yes [12]"
        }
    ],
    "23": [
        {
            "tcp": "Yes",
            "udp": "Assigned",
            "iana": "Official",
            "desciption": "Telnet protocol—unencrypted text communications[10][23]",
            "sctp": ""
        }
    ],
    "25": [
        {
            "tcp": "Yes",
            "udp": "Assigned",
            "iana": "Official",
            "desciption": "Simple Mail Transfer Protocol (SMTP),[10][24] used for email routing between mail servers",
            "sctp": ""
        }
    ],
    "28": [
        {
            "tcp": "Yes",
            "udp": "",
            "iana": "Unofficial",
            "desciption": "Palo Alto Networks' Panorama High Availability (HA) sync encrypted port.[25]",
            "sctp": ""
        }
    ],
    "37": [
        {
            "tcp": "Yes",
            "udp": "Yes",
            "iana": "Official",
            "desciption": "Time Protocol[26]",
            "sctp": ""
        }
    ],
    "42": [
        {
            "tcp": "Assigned",
            "udp": "Yes",
            "iana": "Official",
            "desciption": "Host Name Server Protocol[27]",
            "sctp": ""
        }
    ],
    "43": [
        {
            "tcp": "Yes",
            "udp": "Assigned",
            "iana": "Official",
            "desciption": "WHOIS protocol[28][29][30]",
            "sctp": ""
        }
    ],
    "47": [
        {
            "tcp": "Reserved",
            "udp": "Reserved",
            "iana": "Official",
            "desciption": "",
            "sctp": ""
        }
    ],
    "49": [
        {
            "tcp": "Yes",
            "udp": "Yes",
            "iana": "Official",
            "desciption": "TACACS Login Host protocol.[31] TACACS+, still in draft which is an improved but distinct version of TACACS, only uses TCP 49.[32]",
            "sctp": ""
        }
    ],
    "51": [
        {
            "tcp": "Reserved",
            "udp": "Reserved",
            "iana": "Official",
            "desciption": "Historically used for Interface Message Processor logical address management,[33] entry has been removed by IANA on 2013-05-25",
            "sctp": ""
        }
    ],
    "52": [
        {
            "tcp": "Assigned",
            "udp": "Assigned",
            "iana": "Official",
            "desciption": "Xerox Network Systems (XNS) Time Protocol. Despite this port being assigned by IANA, the service is meant to work on SPP (ancestor of IPX/SPX), instead of TCP/IP.[34]",
            "sctp": ""
        }
    ],
    "53": [
        {
            "tcp": "Yes",
            "udp": "Yes",
            "iana": "Official",
            "desciption": "Domain Name System (DNS)[35][10]",
            "sctp": ""
        }
    ],
    "54": [
        {
            "tcp": "Assigned",
            "udp": "Assigned",
            "iana": "Official",
            "desciption": "Xerox Network Systems (XNS) Clearinghouse (Name Server). Despite this port being assigned by IANA, the service is meant to work on SPP (ancestor of IPX/SPX), instead of TCP/IP.[34]",
            "sctp": ""
        }
    ],
    "56": [
        {
            "tcp": "Assigned",
            "udp": "Assigned",
            "iana": "Official",
            "desciption": "Xerox Network Systems (XNS) Authentication Protocol. Despite this port being assigned by IANA, the service is meant to work on SPP (ancestor of IPX/SPX), instead of TCP/IP.[34]",
            "sctp": ""
        }
    ],
    "58": [
        {
            "tcp": "Assigned",
            "udp": "Assigned",
            "iana": "Official",
            "desciption": "Xerox Network Systems (XNS) Mail. Despite this port being assigned by IANA, the service is meant to work on SPP (ancestor of IPX/SPX), instead of TCP/IP.[34]",
            "sctp": ""
        }
    ],
    "61": [
        {
            "tcp": "Reserved",
            "udp": "Reserved",
            "iana": "Official",
            "desciption": "Historically assigned to the NIFTP-Based Mail protocol,[36] but was never documented in the related IEN.[37] The port number entry was removed from IANA's registry on 2017-05-18.[1]",
            "sctp": ""
        }
    ],
    "67": [
        {
            "tcp": "Assigned",
            "udp": "Yes",
            "iana": "Official",
            "desciption": "Bootstrap Protocol (BOOTP) server;[10] also used by Dynamic Host Configuration Protocol (DHCP)",
            "sctp": ""
        }
    ],
    "68": [
        {
            "tcp": "Assigned",
            "udp": "Yes",
            "iana": "Official",
            "desciption": "Bootstrap Protocol (BOOTP) client;[10] also used by Dynamic Host Configuration Protocol (DHCP)",
            "sctp": ""
        }
    ],
    "69": [
        {
            "tcp": "Assigned",
            "udp": "Yes",
            "iana": "Official",
            "desciption": "Trivial File Transfer Protocol (TFTP)[10][38][39][40]",
            "sctp": ""
        }
    ],
    "70": [
        {
            "tcp": "Yes",
            "udp": "Assigned",
            "iana": "Official",
            "desciption": "Gopher protocol[41]",
            "sctp": ""
        }
    ],
    "79": [
        {
            "tcp": "Yes",
            "udp": "Assigned",
            "iana": "Official",
            "desciption": "Finger protocol[10][45][46]",
            "sctp": ""
        }
    ],
    "80": [
        {
            "tcp": "Yes",
            "udp": "Yes",
            "iana": "Official",
            "desciption": "Hypertext Transfer Protocol (HTTP)[47][48] uses TCP in versions 1.x and 2.  HTTP/3 uses QUIC,[49] a transport protocol on top of UDP.",
            "sctp": "Yes [12]"
        }
    ],
    "81": [
        {
            "tcp": "Yes",
            "udp": "",
            "iana": "Unofficial",
            "desciption": "TorPark onion routing[verification needed]",
            "sctp": ""
        }
    ],
    "82": [
        {
            "tcp": "",
            "udp": "Yes",
            "iana": "Unofficial",
            "desciption": "TorPark control[verification needed]",
            "sctp": ""
        }
    ],
    "83": [
        {
            "tcp": "Yes",
            "udp": "Assigned",
            "iana": "Official",
            "desciption": "MIT ML Device, networking file system [50]",
            "sctp": ""
        }
    ],
    "88": [
        {
            "tcp": "Yes",
            "udp": "Assigned",
            "iana": "Official",
            "desciption": "Kerberos[10][51][52] authentication system",
            "sctp": ""
        }
    ],
    "90": [
        {
            "tcp": "Yes",
            "udp": "Yes",
            "iana": "Unofficial",
            "desciption": "PointCast (dotcom)[1][third-party source needed]",
            "sctp": ""
        }
    ],
    "95": [
        {
            "tcp": "Yes",
            "udp": "Assigned",
            "iana": "Official",
            "desciption": "SUPDUP, terminal-independent remote login [53]",
            "sctp": ""
        }
    ],
    "101": [
        {
            "tcp": "Yes",
            "udp": "Assigned",
            "iana": "Official",
            "desciption": "NIC host name[54]",
            "sctp": ""
        }
    ],
    "102": [
        {
            "tcp": "Yes",
            "udp": "Assigned",
            "iana": "Official",
            "desciption": "ISO Transport Service Access Point (TSAP) Class 0 protocol;[55][56]",
            "sctp": ""
        }
    ],
    "104": [
        {
            "tcp": "Yes",
            "udp": "Yes",
            "iana": "Official",
            "desciption": "Digital Imaging and Communications in Medicine (DICOM; also port 11112)",
            "sctp": ""
        }
    ],
    "105": [
        {
            "tcp": "Yes",
            "udp": "Yes",
            "iana": "Official",
            "desciption": "CCSO Nameserver[57]",
            "sctp": ""
        }
    ],
    "107": [
        {
            "tcp": "Yes",
            "udp": "Yes",
            "iana": "Official",
            "desciption": "Remote User Telnet Service (RTelnet)[58]",
            "sctp": ""
        }
    ],
    "108": [
        {
            "tcp": "Yes",
            "udp": "Yes",
            "iana": "Official",
            "desciption": "IBM Systems Network Architecture (SNA) gateway access server",
            "sctp": ""
        }
    ],
    "109": [
        {
            "tcp": "Yes",
            "udp": "Assigned",
            "iana": "Official",
            "desciption": "Post Office Protocol, version 2 (POP2)[59]",
            "sctp": ""
        }
    ],
    "110": [
        {
            "tcp": "Yes",
            "udp": "Assigned",
            "iana": "Official",
            "desciption": "Post Office Protocol, version 3 (POP3)[10][60][61]",
            "sctp": ""
        }
    ],
    "111": [
        {
            "tcp": "Yes",
            "udp": "Yes",
            "iana": "Official",
            "desciption": "Open Network Computing Remote Procedure Call (ONC RPC, sometimes referred to as Sun RPC)",
            "sctp": ""
        }
    ],
    "113": [
        {
            "tcp": "Yes",
            "udp": "No",
            "iana": "Official",
            "desciption": "Ident, authentication service/identification protocol,[10][62] used by IRC servers to identify users",
            "sctp": ""
        },
        {
            "tcp": "Yes",
            "udp": "Assigned",
            "iana": "Official",
            "desciption": "Authentication Service (auth), the predecessor to identification protocol. Used to determine a user's identity of a particular TCP connection.[63]",
            "sctp": ""
        }
    ],
    "115": [
        {
            "tcp": "Yes",
            "udp": "Assigned",
            "iana": "Official",
            "desciption": "Simple File Transfer Protocol[10][64]",
            "sctp": ""
        }
    ],
    "117": [
        {
            "tcp": "Yes",
            "udp": "Yes",
            "iana": "Official",
            "desciption": "UUCP Mapping Project (path service)[citation needed]",
            "sctp": ""
        }
    ],
    "118": [
        {
            "tcp": "Yes",
            "udp": "Yes",
            "iana": "Official",
            "desciption": "Structured Query Language (SQL) Services[jargon]",
            "sctp": ""
        }
    ],
    "119": [
        {
            "tcp": "Yes",
            "udp": "Assigned",
            "iana": "Official",
            "desciption": "Network News Transfer Protocol (NNTP),[10] retrieval of newsgroup messages[65][66]",
            "sctp": ""
        }
    ],
    "123": [
        {
            "tcp": "Assigned",
            "udp": "Yes",
            "iana": "Official",
            "desciption": "Network Time Protocol (NTP), used for time synchronization[10]",
            "sctp": ""
        }
    ],
    "126": [
        {
            "tcp": "Yes",
            "udp": "Yes",
            "iana": "Official",
            "desciption": "Formerly Unisys Unitary Login, renamed by Unisys to NXEdit. Used by Unisys Programmer's Workbench for Clearpath MCP, an IDE for Unisys MCP software development",
            "sctp": ""
        }
    ],
    "135": [
        {
            "tcp": "Yes",
            "udp": "Yes",
            "iana": "Official",
            "desciption": "DCE endpoint resolution",
            "sctp": ""
        },
        {
            "tcp": "Yes",
            "udp": "Yes",
            "iana": "Official",
            "desciption": "Microsoft EPMAP (End Point Mapper), also known as DCE/RPC Locator service,[67] used to remotely manage services including DHCP server, DNS server and WINS. Also used by DCOM",
            "sctp": ""
        }
    ],
    "137": [
        {
            "tcp": "Yes",
            "udp": "Yes",
            "iana": "Official",
            "desciption": "NetBIOS Name Service, used for name registration and resolution[68][69]",
            "sctp": ""
        }
    ],
    "138": [
        {
            "tcp": "Assigned",
            "udp": "Yes",
            "iana": "Official",
            "desciption": "NetBIOS Datagram Service[10][68][69]",
            "sctp": ""
        }
    ],
    "139": [
        {
            "tcp": "Yes",
            "udp": "Assigned",
            "iana": "Official",
            "desciption": "NetBIOS Session Service[68][69]",
            "sctp": ""
        }
    ],
    "143": [
        {
            "tcp": "Yes",
            "udp": "Assigned",
            "iana": "Official",
            "desciption": "Internet Message Access Protocol (IMAP),[10] management of electronic mail messages on a server[70]",
            "sctp": ""
        }
    ],
    "152": [
        {
            "tcp": "Yes",
            "udp": "Yes",
            "iana": "Official",
            "desciption": "Background File Transfer Program (BFTP)[71][importance?]",
            "sctp": ""
        }
    ],
    "153": [
        {
            "tcp": "Yes",
            "udp": "Yes",
            "iana": "Official",
            "desciption": "Simple Gateway Monitoring Protocol (SGMP), a protocol for remote inspection and alteration of gateway management information[72]",
            "sctp": ""
        }
    ],
    "156": [
        {
            "tcp": "Yes",
            "udp": "Yes",
            "iana": "Official",
            "desciption": "Structured Query Language (SQL) Service[jargon]",
            "sctp": ""
        }
    ],
    "158": [
        {
            "tcp": "Yes",
            "udp": "Yes",
            "iana": "Official",
            "desciption": "Distributed Mail System Protocol (DMSP, sometimes referred to as Pcmail)[73][importance?]",
            "sctp": ""
        }
    ],
    "161": [
        {
            "tcp": "Assigned",
            "udp": "Yes",
            "iana": "Official",
            "desciption": "Simple Network Management Protocol (SNMP)[74][citation needed][10]",
            "sctp": ""
        }
    ],
    "162": [
        {
            "tcp": "Yes",
            "udp": "Yes",
            "iana": "Official",
            "desciption": "Simple Network Management Protocol Trap (SNMPTRAP)[74][75][citation needed]",
            "sctp": ""
        }
    ],
    "170": [
        {
            "tcp": "Yes",
            "udp": "Yes",
            "iana": "Official",
            "desciption": "Network PostScript print server",
            "sctp": ""
        }
    ],
    "177": [
        {
            "tcp": "Yes",
            "udp": "Yes",
            "iana": "Official",
            "desciption": "X Display Manager Control Protocol (XDMCP), used for remote logins to an X Display Manager server[76][self-published source]",
            "sctp": ""
        }
    ],
    "179": [
        {
            "tcp": "Yes",
            "udp": "Assigned",
            "iana": "Official",
            "desciption": "Border Gateway Protocol (BGP),[77] used to exchange routing and reachability information among autonomous systems (AS) on the Internet",
            "sctp": "Yes [12]"
        }
    ],
    "194": [
        {
            "tcp": "Yes",
            "udp": "Yes",
            "iana": "Official",
            "desciption": "Internet Relay Chat (IRC)[78]",
            "sctp": ""
        }
    ],
    "199": [
        {
            "tcp": "Yes",
            "udp": "Yes",
            "iana": "Official",
            "desciption": "SNMP Unix Multiplexer (SMUX)[79]",
            "sctp": ""
        }
    ],
    "201": [
        {
            "tcp": "Yes",
            "udp": "Yes",
            "iana": "Official",
            "desciption": "AppleTalk Routing Maintenance",
            "sctp": ""
        }
    ],
    "209": [
        {
            "tcp": "Yes",
            "udp": "Assigned",
            "iana": "Official",
            "desciption": "Quick Mail Transfer Protocol[80][self-published source]",
            "sctp": ""
        }
    ],
    "210": [
        {
            "tcp": "Yes",
            "udp": "Yes",
            "iana": "Official",
            "desciption": "ANSI Z39.50",
            "sctp": ""
        }
    ],
    "213": [
        {
            "tcp": "Yes",
            "udp": "Yes",
            "iana": "Official",
            "desciption": "Internetwork Packet Exchange (IPX)",
            "sctp": ""
        }
    ],
    "218": [
        {
            "tcp": "Yes",
            "udp": "Yes",
            "iana": "Official",
            "desciption": "Message posting protocol (MPP)",
            "sctp": ""
        }
    ],
    "220": [
        {
            "tcp": "Yes",
            "udp": "Yes",
            "iana": "Official",
            "desciption": "Internet Message Access Protocol (IMAP), version 3",
            "sctp": ""
        }
    ],
    "259": [
        {
            "tcp": "Yes",
            "udp": "Yes",
            "iana": "Official",
            "desciption": "Efficient Short Remote Operations (ESRO)",
            "sctp": ""
        }
    ],
    "262": [
        {
            "tcp": "Yes",
            "udp": "Yes",
            "iana": "Official",
            "desciption": "Arcisdms",
            "sctp": ""
        }
    ],
    "264": [
        {
            "tcp": "Yes",
            "udp": "Yes",
            "iana": "Official",
            "desciption": "Border Gateway Multicast Protocol (BGMP)",
            "sctp": ""
        }
    ],
    "280": [
        {
            "tcp": "Yes",
            "udp": "Yes",
            "iana": "Official",
            "desciption": "http-mgmt",
            "sctp": ""
        }
    ],
    "300": [
        {
            "tcp": "Yes",
            "udp": "",
            "iana": "Unofficial",
            "desciption": "ThinLinc Web Access",
            "sctp": ""
        }
    ],
    "308": [
        {
            "tcp": "Yes",
            "udp": "",
            "iana": "Official",
            "desciption": "Novastor Online Backup",
            "sctp": ""
        }
    ],
    "311": [
        {
            "tcp": "Yes",
            "udp": "Assigned",
            "iana": "Official",
            "desciption": "Mac OS X Server Admin[10] (officially AppleShare IP Web administration[1])",
            "sctp": ""
        }
    ],
    "318": [
        {
            "tcp": "Yes",
            "udp": "Yes",
            "iana": "Official",
            "desciption": "PKIX Time Stamp Protocol (TSP)",
            "sctp": ""
        }
    ],
    "319": [
        {
            "tcp": "",
            "udp": "Yes",
            "iana": "Official",
            "desciption": "Precision Time Protocol (PTP) event messages",
            "sctp": ""
        }
    ],
    "320": [
        {
            "tcp": "",
            "udp": "Yes",
            "iana": "Official",
            "desciption": "Precision Time Protocol (PTP) general messages",
            "sctp": ""
        }
    ],
    "350": [
        {
            "tcp": "Yes",
            "udp": "Yes",
            "iana": "Official",
            "desciption": "Mapping of Airline Traffic over Internet Protocol (MATIP) type A",
            "sctp": ""
        }
    ],
    "351": [
        {
            "tcp": "Yes",
            "udp": "Yes",
            "iana": "Official",
            "desciption": "MATIP type B",
            "sctp": ""
        }
    ],
    "356": [
        {
            "tcp": "Yes",
            "udp": "Yes",
            "iana": "Official",
            "desciption": "cloanto-net-1 (used by Cloanto Amiga Explorer and VMs)",
            "sctp": ""
        }
    ],
    "366": [
        {
            "tcp": "Yes",
            "udp": "Yes",
            "iana": "Official",
            "desciption": "On-Demand Mail Relay (ODMR)",
            "sctp": ""
        }
    ],
    "369": [
        {
            "tcp": "Yes",
            "udp": "Yes",
            "iana": "Official",
            "desciption": "Rpc2portmap",
            "sctp": ""
        }
    ],
    "370": [
        {
            "tcp": "Yes",
            "udp": "Yes",
            "iana": "Official",
            "desciption": "codaauth2, Coda authentication server",
            "sctp": ""
        },
        {
            "tcp": "",
            "udp": "Yes",
            "iana": "Official",
            "desciption": "securecast1, outgoing packets to NAI's SecureCast servers[81]As of 2000[update]",
            "sctp": ""
        }
    ],
    "371": [
        {
            "tcp": "Yes",
            "udp": "Yes",
            "iana": "Official",
            "desciption": "ClearCase albd",
            "sctp": ""
        }
    ],
    "376": [
        {
            "tcp": "Yes",
            "udp": "Yes",
            "iana": "Official",
            "desciption": "Amiga Envoy Network Inquiry Protocol",
            "sctp": ""
        }
    ],
    "383": [
        {
            "tcp": "Yes",
            "udp": "Yes",
            "iana": "Official",
            "desciption": "HP data alarm manager",
            "sctp": ""
        }
    ],
    "384": [
        {
            "tcp": "Yes",
            "udp": "Yes",
            "iana": "Official",
            "desciption": "A Remote Network Server System",
            "sctp": ""
        }
    ],
    "387": [
        {
            "tcp": "Yes",
            "udp": "Yes",
            "iana": "Official",
            "desciption": "AURP (AppleTalk Update-based Routing Protocol)[82]",
            "sctp": ""
        }
    ],
    "388": [
        {
            "tcp": "Yes",
            "udp": "Assigned",
            "iana": "Official",
            "desciption": "Unidata LDM near real-time data distribution protocol[83][self-published source][84][self-published source]",
            "sctp": ""
        }
    ],
    "389": [
        {
            "tcp": "Yes",
            "udp": "Assigned",
            "iana": "Official",
            "desciption": "Lightweight Directory Access Protocol (LDAP)[10]",
            "sctp": ""
        }
    ],
    "399": [
        {
            "tcp": "Yes",
            "udp": "Yes",
            "iana": "Official",
            "desciption": "Digital Equipment Corporation DECnet+ (Phase V) over TCP/IP (RFC1859)",
            "sctp": ""
        }
    ],
    "401": [
        {
            "tcp": "Yes",
            "udp": "Yes",
            "iana": "Official",
            "desciption": "Uninterruptible power supply (UPS)",
            "sctp": ""
        }
    ],
    "427": [
        {
            "tcp": "Yes",
            "udp": "Yes",
            "iana": "Official",
            "desciption": "Service Location Protocol (SLP)[10]",
            "sctp": ""
        }
    ],
    "433": [
        {
            "tcp": "Yes",
            "udp": "Yes",
            "iana": "Official",
            "desciption": "NNSP, part of Network News Transfer Protocol",
            "sctp": ""
        }
    ],
    "434": [
        {
            "tcp": "Yes",
            "udp": "Yes",
            "iana": "Official",
            "desciption": "Mobile IP Agent (RFC 5944)",
            "sctp": ""
        }
    ],
    "443": [
        {
            "tcp": "Yes",
            "udp": "Yes",
            "iana": "Official",
            "desciption": "Hypertext Transfer Protocol (HTTP)[47][48] uses TCP in versions 1.x and 2.  HTTP/3 uses QUIC,[49] a transport protocol on top of UDP.",
            "sctp": "Yes [12]"
        }
    ],
    "444": [
        {
            "tcp": "Yes",
            "udp": "Yes",
            "iana": "Official",
            "desciption": "Simple Network Paging Protocol (SNPP), RFC 1568",
            "sctp": ""
        }
    ],
    "445": [
        {
            "tcp": "Yes",
            "udp": "Yes",
            "iana": "Official",
            "desciption": "Microsoft-DS (Directory Services) Active Directory,[85] Windows shares",
            "sctp": ""
        },
        {
            "tcp": "Yes",
            "udp": "Assigned",
            "iana": "Official",
            "desciption": "Microsoft-DS (Directory Services) SMB[10] file sharing",
            "sctp": ""
        }
    ],
    "464": [
        {
            "tcp": "Yes",
            "udp": "Yes",
            "iana": "Official",
            "desciption": "Kerberos Change/Set password",
            "sctp": ""
        }
    ],
    "465": [
        {
            "tcp": "Yes",
            "udp": "No",
            "iana": "Official",
            "desciption": "URL Rendezvous Directory for SSM (Cisco protocol)[importance?]",
            "sctp": ""
        },
        {
            "tcp": "Yes",
            "udp": "No",
            "iana": "Official",
            "desciption": "Authenticated SMTP[10] over TLS/SSL (SMTPS)[86]",
            "sctp": ""
        }
    ],
    "475": [
        {
            "tcp": "Yes",
            "udp": "Yes",
            "iana": "Official",
            "desciption": "tcpnethaspsrv, Aladdin Knowledge Systems Hasp services",
            "sctp": ""
        }
    ],
    "491": [
        {
            "tcp": "Yes",
            "udp": "",
            "iana": "Unofficial",
            "desciption": "GO-Global remote access and application publishing software",
            "sctp": ""
        }
    ],
    "497": [
        {
            "tcp": "Yes",
            "udp": "Yes",
            "iana": "Official",
            "desciption": "Retrospect",
            "sctp": ""
        }
    ],
    "500": [
        {
            "tcp": "Assigned",
            "udp": "Yes",
            "iana": "Official",
            "desciption": "Internet Security Association and Key Management Protocol (ISAKMP) / Internet Key Exchange (IKE)[10]",
            "sctp": ""
        }
    ],
    "502": [
        {
            "tcp": "Yes",
            "udp": "Yes",
            "iana": "Official",
            "desciption": "Modbus Protocol",
            "sctp": ""
        }
    ],
    "504": [
        {
            "tcp": "Yes",
            "udp": "Yes",
            "iana": "Official",
            "desciption": "Citadel, multiservice protocol for dedicated clients for the Citadel groupware system",
            "sctp": ""
        }
    ],
    "510": [
        {
            "tcp": "Yes",
            "udp": "Yes",
            "iana": "Official",
            "desciption": "FirstClass Protocol (FCP), used by FirstClass client/server groupware system",
            "sctp": ""
        }
    ],
    "512": [
        {
            "tcp": "Yes",
            "udp": "",
            "iana": "Official",
            "desciption": "Rexec, Remote Process Execution",
            "sctp": ""
        },
        {
            "tcp": "",
            "udp": "Yes",
            "iana": "Official",
            "desciption": "comsat, together with biff",
            "sctp": ""
        }
    ],
    "513": [
        {
            "tcp": "Yes",
            "udp": "",
            "iana": "Official",
            "desciption": "rlogin",
            "sctp": ""
        },
        {
            "tcp": "",
            "udp": "Yes",
            "iana": "Official",
            "desciption": "Who[87]",
            "sctp": ""
        }
    ],
    "514": [
        {
            "tcp": "Yes",
            "udp": "",
            "iana": "Unofficial",
            "desciption": "Remote Shell, used to execute non-interactive commands on a remote system (Remote Shell, rsh, remsh)",
            "sctp": ""
        },
        {
            "tcp": "No",
            "udp": "Yes",
            "iana": "Official",
            "desciption": "Syslog,[10] used for system logging",
            "sctp": ""
        }
    ],
    "515": [
        {
            "tcp": "Yes",
            "udp": "Assigned",
            "iana": "Official",
            "desciption": "Line Printer Daemon (LPD),[10] print service",
            "sctp": ""
        }
    ],
    "517": [
        {
            "tcp": "",
            "udp": "Yes",
            "iana": "Official",
            "desciption": "Talk",
            "sctp": ""
        }
    ],
    "518": [
        {
            "tcp": "",
            "udp": "Yes",
            "iana": "Official",
            "desciption": "NTalk",
            "sctp": ""
        }
    ],
    "520": [
        {
            "tcp": "Yes",
            "udp": "",
            "iana": "Official",
            "desciption": "efs, extended file name server",
            "sctp": ""
        },
        {
            "tcp": "",
            "udp": "Yes",
            "iana": "Official",
            "desciption": "Routing Information Protocol (RIP)",
            "sctp": ""
        }
    ],
    "521": [
        {
            "tcp": "",
            "udp": "Yes",
            "iana": "Official",
            "desciption": "Routing Information Protocol Next Generation (RIPng)",
            "sctp": ""
        }
    ],
    "524": [
        {
            "tcp": "Yes",
            "udp": "Yes",
            "iana": "Official",
            "desciption": "NetWare Core Protocol (NCP) is used for a variety things such as access to primary NetWare server resources, Time Synchronization, etc.",
            "sctp": ""
        }
    ],
    "525": [
        {
            "tcp": "",
            "udp": "Yes",
            "iana": "Official",
            "desciption": "Timed, Timeserver",
            "sctp": ""
        }
    ],
    "530": [
        {
            "tcp": "Yes",
            "udp": "Yes",
            "iana": "Official",
            "desciption": "Remote procedure call (RPC)",
            "sctp": ""
        }
    ],
    "532": [
        {
            "tcp": "Yes",
            "udp": "Assigned",
            "iana": "Official",
            "desciption": "netnews[10]",
            "sctp": ""
        }
    ],
    "533": [
        {
            "tcp": "",
            "udp": "Yes",
            "iana": "Official",
            "desciption": "netwall, For Emergency Broadcasts",
            "sctp": ""
        }
    ],
    "540": [
        {
            "tcp": "Yes",
            "udp": "",
            "iana": "Official",
            "desciption": "Unix-to-Unix Copy Protocol (UUCP)",
            "sctp": ""
        }
    ],
    "542": [
        {
            "tcp": "Yes",
            "udp": "Yes",
            "iana": "Official",
            "desciption": "commerce (Commerce Applications)",
            "sctp": ""
        }
    ],
    "543": [
        {
            "tcp": "Yes",
            "udp": "",
            "iana": "Official",
            "desciption": "klogin, Kerberos login",
            "sctp": ""
        }
    ],
    "544": [
        {
            "tcp": "Yes",
            "udp": "",
            "iana": "Official",
            "desciption": "kshell, Kerberos Remote shell",
            "sctp": ""
        }
    ],
    "546": [
        {
            "tcp": "Yes",
            "udp": "Yes",
            "iana": "Official",
            "desciption": "DHCPv6 client",
            "sctp": ""
        }
    ],
    "547": [
        {
            "tcp": "Yes",
            "udp": "Yes",
            "iana": "Official",
            "desciption": "DHCPv6 server",
            "sctp": ""
        }
    ],
    "548": [
        {
            "tcp": "Yes",
            "udp": "Assigned",
            "iana": "Official",
            "desciption": "Apple Filing Protocol (AFP) over TCP[10]",
            "sctp": ""
        }
    ],
    "550": [
        {
            "tcp": "Yes",
            "udp": "Yes",
            "iana": "Official",
            "desciption": "new-rwho, new-who[87]",
            "sctp": ""
        }
    ],
    "554": [
        {
            "tcp": "Yes",
            "udp": "Yes",
            "iana": "Official",
            "desciption": "Real Time Streaming Protocol (RTSP)[10]",
            "sctp": ""
        }
    ],
    "556": [
        {
            "tcp": "Yes",
            "udp": "",
            "iana": "Official",
            "desciption": "Remotefs, RFS, rfs_server",
            "sctp": ""
        }
    ],
    "560": [
        {
            "tcp": "",
            "udp": "Yes",
            "iana": "Official",
            "desciption": "rmonitor, Remote Monitor",
            "sctp": ""
        }
    ],
    "561": [
        {
            "tcp": "",
            "udp": "Yes",
            "iana": "Official",
            "desciption": "monitor",
            "sctp": ""
        }
    ],
    "563": [
        {
            "tcp": "Yes",
            "udp": "Yes",
            "iana": "Official",
            "desciption": "NNTP over TLS/SSL (NNTPS)",
            "sctp": ""
        }
    ],
    "564": [
        {
            "tcp": "Yes",
            "udp": "",
            "iana": "Unofficial",
            "desciption": "9P (Plan 9)",
            "sctp": ""
        }
    ],
    "585": [
        {
            "tcp": "Port 993",
            "udp": "?",
            "iana": "Unofficial",
            "desciption": "Legacy use of Internet Message Access Protocol over TLS/SSL (IMAPS), now in use at port 993.[88]",
            "sctp": ""
        }
    ],
    "587": [
        {
            "tcp": "Yes",
            "udp": "Assigned",
            "iana": "Official",
            "desciption": "email message submission[10][89] (SMTP)",
            "sctp": ""
        }
    ],
    "591": [
        {
            "tcp": "Yes",
            "udp": "",
            "iana": "Official",
            "desciption": "FileMaker 6.0 (and later) Web Sharing (HTTP Alternate, also see port 80)",
            "sctp": ""
        }
    ],
    "593": [
        {
            "tcp": "Yes",
            "udp": "Yes",
            "iana": "Official",
            "desciption": "HTTP RPC Ep Map, Remote procedure call over Hypertext Transfer Protocol, often used by Distributed Component Object Model services and Microsoft Exchange Server",
            "sctp": ""
        }
    ],
    "601": [
        {
            "tcp": "Yes",
            "udp": "",
            "iana": "Official",
            "desciption": "Reliable Syslog Service — used for system logging",
            "sctp": ""
        }
    ],
    "604": [
        {
            "tcp": "Yes",
            "udp": "",
            "iana": "Official",
            "desciption": "TUNNEL profile,[90] a protocol for BEEP peers to form an application layer tunnel",
            "sctp": ""
        }
    ],
    "623": [
        {
            "tcp": "",
            "udp": "Yes",
            "iana": "Official",
            "desciption": "ASF Remote Management and Control Protocol (ASF-RMCP) & IPMI Remote Management Protocol",
            "sctp": ""
        }
    ],
    "625": [
        {
            "tcp": "Yes",
            "udp": "No",
            "iana": "Unofficial",
            "desciption": "Open Directory Proxy (ODProxy)[10]",
            "sctp": ""
        }
    ],
    "631": [
        {
            "tcp": "Yes",
            "udp": "Yes",
            "iana": "Official",
            "desciption": "Internet Printing Protocol (IPP)[10]",
            "sctp": ""
        },
        {
            "tcp": "Yes",
            "udp": "Yes",
            "iana": "Unofficial",
            "desciption": "Common Unix Printing System (CUPS) administration console (extension to IPP)",
            "sctp": ""
        }
    ],
    "635": [
        {
            "tcp": "Yes",
            "udp": "Yes",
            "iana": "Official",
            "desciption": "RLZ DBase",
            "sctp": ""
        }
    ],
    "636": [
        {
            "tcp": "Yes",
            "udp": "Assigned",
            "iana": "Official",
            "desciption": "Lightweight Directory Access Protocol over TLS/SSL (LDAPS)[10]",
            "sctp": ""
        }
    ],
    "639": [
        {
            "tcp": "Yes",
            "udp": "Yes",
            "iana": "Official",
            "desciption": "MSDP, Multicast Source Discovery Protocol",
            "sctp": ""
        }
    ],
    "641": [
        {
            "tcp": "Yes",
            "udp": "Yes",
            "iana": "Official",
            "desciption": "SupportSoft Nexus Remote Command (control/listening), a proxy gateway connecting remote control traffic",
            "sctp": ""
        }
    ],
    "643": [
        {
            "tcp": "Yes",
            "udp": "Yes",
            "iana": "Official",
            "desciption": "SANity",
            "sctp": ""
        }
    ],
    "646": [
        {
            "tcp": "Yes",
            "udp": "Yes",
            "iana": "Official",
            "desciption": "Label Distribution Protocol (LDP), a routing protocol used in MPLS networks",
            "sctp": ""
        }
    ],
    "647": [
        {
            "tcp": "Yes",
            "udp": "",
            "iana": "Official",
            "desciption": "DHCP Failover protocol[91]",
            "sctp": ""
        }
    ],
    "648": [
        {
            "tcp": "Yes",
            "udp": "",
            "iana": "Official",
            "desciption": "Registry Registrar Protocol (RRP)[92]",
            "sctp": ""
        }
    ],
    "651": [
        {
            "tcp": "Yes",
            "udp": "Yes",
            "iana": "Official",
            "desciption": "IEEE-MMS",
            "sctp": ""
        }
    ],
    "653": [
        {
            "tcp": "Yes",
            "udp": "Yes",
            "iana": "Official",
            "desciption": "SupportSoft Nexus Remote Command (data), a proxy gateway connecting remote control traffic",
            "sctp": ""
        }
    ],
    "654": [
        {
            "tcp": "Yes",
            "udp": "",
            "iana": "Official",
            "desciption": "Media Management System (MMS) Media Management Protocol (MMP)[93]",
            "sctp": ""
        }
    ],
    "655": [
        {
            "tcp": "Yes",
            "udp": "Yes",
            "iana": "Official",
            "desciption": "Tinc VPN daemon",
            "sctp": ""
        }
    ],
    "657": [
        {
            "tcp": "Yes",
            "udp": "Yes",
            "iana": "Official",
            "desciption": "IBM RMC (Remote monitoring and Control) protocol, used by System p5 AIX Integrated Virtualization Manager (IVM)[94] and Hardware Management Console to connect managed logical partitions (LPAR) to enable dynamic partition reconfiguration",
            "sctp": ""
        }
    ],
    "660": [
        {
            "tcp": "Yes",
            "udp": "Assigned",
            "iana": "Official",
            "desciption": "Mac OS X Server administration,[1] version 10.4 and earlier[10]",
            "sctp": ""
        }
    ],
    "666": [
        {
            "tcp": "Yes",
            "udp": "Yes",
            "iana": "Official",
            "desciption": "Doom, first online first-person shooter",
            "sctp": ""
        },
        {
            "tcp": "Yes",
            "udp": "",
            "iana": "Unofficial",
            "desciption": "airserv-ng, aircrack-ng's server for remote-controlling wireless devices",
            "sctp": ""
        }
    ],
    "674": [
        {
            "tcp": "Yes",
            "udp": "",
            "iana": "Official",
            "desciption": "Application Configuration Access Protocol (ACAP)",
            "sctp": ""
        }
    ],
    "688": [
        {
            "tcp": "Yes",
            "udp": "Yes",
            "iana": "Official",
            "desciption": "REALM-RUSD (ApplianceWare Server Appliance Management Protocol)",
            "sctp": ""
        }
    ],
    "690": [
        {
            "tcp": "Yes",
            "udp": "Yes",
            "iana": "Official",
            "desciption": "Velneo Application Transfer Protocol (VATP)",
            "sctp": ""
        }
    ],
    "691": [
        {
            "tcp": "Yes",
            "udp": "",
            "iana": "Official",
            "desciption": "MS Exchange Routing",
            "sctp": ""
        }
    ],
    "694": [
        {
            "tcp": "Yes",
            "udp": "Yes",
            "iana": "Official",
            "desciption": "Linux-HA high-availability heartbeat",
            "sctp": ""
        }
    ],
    "695": [
        {
            "tcp": "Yes",
            "udp": "",
            "iana": "Official",
            "desciption": "IEEE Media Management System over SSL (IEEE-MMS-SSL)[95]",
            "sctp": ""
        }
    ],
    "698": [
        {
            "tcp": "",
            "udp": "Yes",
            "iana": "Official",
            "desciption": "Optimized Link State Routing (OLSR)",
            "sctp": ""
        }
    ],
    "700": [
        {
            "tcp": "Yes",
            "udp": "",
            "iana": "Official",
            "desciption": "Extensible Provisioning Protocol (EPP), a protocol for communication between domain name registries and registrars (RFC 5734)",
            "sctp": ""
        }
    ],
    "701": [
        {
            "tcp": "Yes",
            "udp": "",
            "iana": "Official",
            "desciption": "Link Management Protocol (LMP),[96] a protocol that runs between a pair of nodes and is used to manage traffic engineering (TE) links",
            "sctp": ""
        }
    ],
    "702": [
        {
            "tcp": "Yes",
            "udp": "",
            "iana": "Official",
            "desciption": "IRIS[97][98] (Internet Registry Information Service) over BEEP (Blocks Extensible Exchange Protocol)[99] (RFC 3983)",
            "sctp": ""
        }
    ],
    "706": [
        {
            "tcp": "Yes",
            "udp": "",
            "iana": "Official",
            "desciption": "Secure Internet Live Conferencing (SILC)",
            "sctp": ""
        }
    ],
    "711": [
        {
            "tcp": "Yes",
            "udp": "",
            "iana": "Official",
            "desciption": "Cisco Tag Distribution Protocol[100][101][102]—being replaced by the MPLS Label Distribution Protocol[103]",
            "sctp": ""
        }
    ],
    "712": [
        {
            "tcp": "Yes",
            "udp": "",
            "iana": "Official",
            "desciption": "Topology Broadcast based on Reverse-Path Forwarding routing protocol (TBRPF; RFC 3684)",
            "sctp": ""
        }
    ],
    "749": [
        {
            "tcp": "Yes",
            "udp": "Yes",
            "iana": "Official",
            "desciption": "Kerberos (protocol) administration[10]",
            "sctp": ""
        }
    ],
    "750": [
        {
            "tcp": "",
            "udp": "Yes",
            "iana": "Official",
            "desciption": "kerberos-iv, Kerberos version IV",
            "sctp": ""
        }
    ],
    "751": [
        {
            "tcp": "Yes",
            "udp": "Yes",
            "iana": "Unofficial",
            "desciption": "kerberos_master, Kerberos authentication",
            "sctp": ""
        }
    ],
    "752": [
        {
            "tcp": "",
            "udp": "Yes",
            "iana": "Unofficial",
            "desciption": "passwd_server, Kerberos password (kpasswd) server",
            "sctp": ""
        }
    ],
    "753": [
        {
            "tcp": "Yes",
            "udp": "Yes",
            "iana": "Official",
            "desciption": "Reverse Routing Header (RRH)[104]",
            "sctp": ""
        },
        {
            "tcp": "",
            "udp": "Yes",
            "iana": "Unofficial",
            "desciption": "userreg_server, Kerberos userreg server",
            "sctp": ""
        }
    ],
    "754": [
        {
            "tcp": "Yes",
            "udp": "Yes",
            "iana": "Official",
            "desciption": "tell send",
            "sctp": ""
        },
        {
            "tcp": "Yes",
            "udp": "",
            "iana": "Unofficial",
            "desciption": "krb5_prop, Kerberos v5 slave propagation",
            "sctp": ""
        }
    ],
    "760": [
        {
            "tcp": "Yes",
            "udp": "Yes",
            "iana": "Unofficial",
            "desciption": "krbupdate [kreg], Kerberos registration",
            "sctp": ""
        }
    ],
    "782": [
        {
            "tcp": "Yes",
            "udp": "",
            "iana": "Unofficial",
            "desciption": "Conserver serial-console management server",
            "sctp": ""
        }
    ],
    "783": [
        {
            "tcp": "Yes",
            "udp": "",
            "iana": "Unofficial",
            "desciption": "SpamAssassin spamd daemon",
            "sctp": ""
        }
    ],
    "800": [
        {
            "tcp": "Yes",
            "udp": "Yes",
            "iana": "Official",
            "desciption": "mdbs-daemon",
            "sctp": ""
        }
    ],
    "802": [
        {
            "tcp": "Yes",
            "udp": "Yes",
            "iana": "Official",
            "desciption": "MODBUS/TCP Security[105]",
            "sctp": ""
        }
    ],
    "808": [
        {
            "tcp": "Yes",
            "udp": "",
            "iana": "Unofficial",
            "desciption": "Microsoft Net.TCP Port Sharing Service",
            "sctp": ""
        }
    ],
    "829": [
        {
            "tcp": "Yes",
            "udp": "Assigned",
            "iana": "Official",
            "desciption": "Certificate Management Protocol[106]",
            "sctp": ""
        }
    ],
    "830": [
        {
            "tcp": "Yes",
            "udp": "Yes",
            "iana": "Official",
            "desciption": "NETCONF over SSH",
            "sctp": ""
        }
    ],
    "831": [
        {
            "tcp": "Yes",
            "udp": "Yes",
            "iana": "Official",
            "desciption": "NETCONF over BEEP",
            "sctp": ""
        }
    ],
    "832": [
        {
            "tcp": "Yes",
            "udp": "Yes",
            "iana": "Official",
            "desciption": "NETCONF for SOAP over HTTPS",
            "sctp": ""
        }
    ],
    "833": [
        {
            "tcp": "Yes",
            "udp": "Yes",
            "iana": "Official",
            "desciption": "NETCONF for SOAP over BEEP",
            "sctp": ""
        }
    ],
    "843": [
        {
            "tcp": "Yes",
            "udp": "",
            "iana": "Unofficial",
            "desciption": "Adobe Flash[107]",
            "sctp": ""
        }
    ],
    "847": [
        {
            "tcp": "Yes",
            "udp": "",
            "iana": "Official",
            "desciption": "DHCP Failover protocol",
            "sctp": ""
        }
    ],
    "848": [
        {
            "tcp": "Yes",
            "udp": "Yes",
            "iana": "Official",
            "desciption": "Group Domain Of Interpretation (GDOI) protocol",
            "sctp": ""
        }
    ],
    "853": [
        {
            "tcp": "Yes",
            "udp": "Yes",
            "iana": "Official",
            "desciption": "DNS over TLS (RFC 7858)",
            "sctp": ""
        }
    ],
    "860": [
        {
            "tcp": "Yes",
            "udp": "",
            "iana": "Official",
            "desciption": "iSCSI (RFC 3720)",
            "sctp": ""
        }
    ],
    "861": [
        {
            "tcp": "Yes",
            "udp": "Yes",
            "iana": "Official",
            "desciption": "OWAMP control (RFC 4656)",
            "sctp": ""
        }
    ],
    "862": [
        {
            "tcp": "Yes",
            "udp": "Yes",
            "iana": "Official",
            "desciption": "TWAMP control (RFC 5357)",
            "sctp": ""
        }
    ],
    "873": [
        {
            "tcp": "Yes",
            "udp": "",
            "iana": "Official",
            "desciption": "rsync file synchronization protocol",
            "sctp": ""
        }
    ],
    "888": [
        {
            "tcp": "Yes",
            "udp": "",
            "iana": "Unofficial",
            "desciption": "cddbp, CD DataBase (CDDB) protocol (CDDBP)",
            "sctp": ""
        },
        {
            "tcp": "Yes",
            "udp": "",
            "iana": "Unofficial",
            "desciption": "IBM Endpoint Manager Remote Control",
            "sctp": ""
        }
    ],
    "897": [
        {
            "tcp": "Yes",
            "udp": "Yes",
            "iana": "Unofficial",
            "desciption": "Brocade SMI-S RPC",
            "sctp": ""
        }
    ],
    "898": [
        {
            "tcp": "Yes",
            "udp": "Yes",
            "iana": "Unofficial",
            "desciption": "Brocade SMI-S RPC SSL",
            "sctp": ""
        }
    ],
    "902": [
        {
            "tcp": "Yes",
            "udp": "Yes",
            "iana": "Unofficial",
            "desciption": "VMware ESXi[108][109]",
            "sctp": ""
        }
    ],
    "903": [
        {
            "tcp": "Yes",
            "udp": "",
            "iana": "Unofficial",
            "desciption": "VMware ESXi[108][109]",
            "sctp": ""
        }
    ],
    "953": [
        {
            "tcp": "Yes",
            "udp": "Reserved",
            "iana": "Official",
            "desciption": "BIND remote name daemon control (RNDC)[110][111]",
            "sctp": ""
        }
    ],
    "981": [
        {
            "tcp": "Yes",
            "udp": "",
            "iana": "Unofficial",
            "desciption": "Remote HTTPS management for firewall devices running embedded Check Point VPN-1 software[112]",
            "sctp": ""
        }
    ],
    "987": [
        {
            "tcp": "Yes",
            "udp": "",
            "iana": "Unofficial",
            "desciption": "Microsoft Remote Web Workplace, a feature of Windows Small Business Server[113]",
            "sctp": ""
        }
    ],
    "989": [
        {
            "tcp": "Yes",
            "udp": "Yes",
            "iana": "Official",
            "desciption": "FTPS Protocol (data), FTP over TLS/SSL",
            "sctp": ""
        }
    ],
    "990": [
        {
            "tcp": "Yes",
            "udp": "Yes",
            "iana": "Official",
            "desciption": "FTPS Protocol (control), FTP over TLS/SSL",
            "sctp": ""
        }
    ],
    "991": [
        {
            "tcp": "Yes",
            "udp": "Yes",
            "iana": "Official",
            "desciption": "Netnews Administration System (NAS)[114]",
            "sctp": ""
        }
    ],
    "992": [
        {
            "tcp": "Yes",
            "udp": "Yes",
            "iana": "Official",
            "desciption": "Telnet protocol over TLS/SSL",
            "sctp": ""
        }
    ],
    "993": [
        {
            "tcp": "Yes",
            "udp": "Assigned",
            "iana": "Official",
            "desciption": "Internet Message Access Protocol over TLS/SSL (IMAPS)[10]",
            "sctp": ""
        }
    ],
    "994": [
        {
            "tcp": "Reserved",
            "udp": "Reserved",
            "iana": "Official",
            "desciption": "",
            "sctp": ""
        },
        {
            "tcp": "Maybe",
            "udp": "Maybe",
            "iana": "Unofficial",
            "desciption": "Internet Relay Chat over TLS/SSL (IRCS). Previously assigned, but not used in common practice.",
            "sctp": ""
        }
    ],
    "995": [
        {
            "tcp": "Yes",
            "udp": "Yes",
            "iana": "Official",
            "desciption": "Post Office Protocol 3 over TLS/SSL (POP3S)[10]",
            "sctp": ""
        }
    ],
    "1010": [
        {
            "tcp": "Yes",
            "udp": "",
            "iana": "Unofficial",
            "desciption": "ThinLinc web-based administration interface[115][self-published source?]",
            "sctp": ""
        }
    ],
    "1023": [
        {
            "tcp": "Reserved",
            "udp": "Reserved",
            "iana": "Official",
            "desciption": "[1]",
            "sctp": ""
        },
        {
            "tcp": "Yes",
            "udp": "Yes",
            "iana": "Unofficial",
            "desciption": "z/OS Network File System (NFS) (potentially ports 991–1023)\n[78]\n[79]\n[116][self-published source]",
            "sctp": ""
        }
    ],
    "71–74": [
        {
            "tcp": "Yes",
            "udp": "Yes",
            "iana": "Official",
            "desciption": "NETRJS protocol[42][43][44]",
            "sctp": ""
        }
    ],
    "225–241": [
        {
            "tcp": "Reserved",
            "udp": "Reserved",
            "iana": "Official",
            "desciption": "",
            "sctp": ""
        }
    ],
    "249–255": [
        {
            "tcp": "Reserved",
            "udp": "Reserved",
            "iana": "Official",
            "desciption": "",
            "sctp": ""
        }
    ],
    "1011–1020": [
        {
            "tcp": "Reserved",
            "udp": "Reserved",
            "iana": "Official",
            "desciption": "",
            "sctp": ""
        }
    ]
};

const registeredPorts = {
    "1024": [
        {
            "tcp": "Reserved",
            "udp": "Reserved",
            "iana": "Official",
            "desciption": "Reserved"
        }
    ],
    "1027": [
        {
            "tcp": "Reserved",
            "udp": "",
            "iana": "Official",
            "desciption": "Reserved"
        },
        {
            "tcp": "",
            "udp": "Yes",
            "iana": "Official",
            "desciption": "Native IPv6 behind IPv4-to-IPv4 NAT Customer Premises Equipment (6a44)[117]"
        }
    ],
    "1028": [
        {
            "tcp": "",
            "udp": "",
            "iana": "Official",
            "desciption": "Deprecated"
        }
    ],
    "1029": [
        {
            "tcp": "",
            "udp": "",
            "iana": "Unofficial",
            "desciption": "Microsoft DCOM services"
        }
    ],
    "1058": [
        {
            "tcp": "Yes",
            "udp": "Yes",
            "iana": "Official",
            "desciption": "nim, IBM AIX Network Installation Manager (NIM)"
        }
    ],
    "1059": [
        {
            "tcp": "Yes",
            "udp": "Yes",
            "iana": "Official",
            "desciption": "nimreg, IBM AIX Network Installation Manager (NIM)"
        }
    ],
    "1080": [
        {
            "tcp": "Yes",
            "udp": "Yes",
            "iana": "Official",
            "desciption": "SOCKS proxy"
        }
    ],
    "1085": [
        {
            "tcp": "Yes",
            "udp": "Yes",
            "iana": "Official",
            "desciption": "WebObjects[10]"
        }
    ],
    "1098": [
        {
            "tcp": "Yes",
            "udp": "Yes",
            "iana": "Official",
            "desciption": "rmiactivation, Java remote method invocation (RMI) activation"
        }
    ],
    "1099": [
        {
            "tcp": "Yes",
            "udp": "Assigned",
            "iana": "Official",
            "desciption": "rmiregistry, Java remote method invocation (RMI) registry"
        }
    ],
    "1109": [
        {
            "tcp": "",
            "udp": "",
            "iana": "Official",
            "desciption": "Reserved – IANA"
        },
        {
            "tcp": "Yes",
            "udp": "",
            "iana": "Unofficial",
            "desciption": "Kerberos Post Office Protocol (KPOP)[citation needed]"
        }
    ],
    "1113": [
        {
            "tcp": "Assigned[note 1][118]",
            "udp": "Yes[119]",
            "iana": "Official",
            "desciption": "Licklider Transmission Protocol (LTP) delay tolerant networking protocol"
        }
    ],
    "1119": [
        {
            "tcp": "Yes",
            "udp": "Yes",
            "iana": "Official",
            "desciption": "Battle.net chat/game protocol, used by Blizzard's games[120]"
        }
    ],
    "1167": [
        {
            "tcp": "Yes, and SCTP",
            "udp": "Yes",
            "iana": "Official",
            "desciption": "Cisco IP SLA (Service Assurance Agent)"
        }
    ],
    "1194": [
        {
            "tcp": "Yes",
            "udp": "Yes",
            "iana": "Official",
            "desciption": "OpenVPN"
        }
    ],
    "1198": [
        {
            "tcp": "Yes",
            "udp": "Yes",
            "iana": "Official",
            "desciption": "The cajo project Free dynamic transparent distributed computing in Java"
        }
    ],
    "1214": [
        {
            "tcp": "Yes",
            "udp": "Yes",
            "iana": "Official",
            "desciption": "Kazaa"
        }
    ],
    "1218": [
        {
            "tcp": "Yes",
            "udp": "No",
            "iana": "Official",
            "desciption": "William POWER"
        }
    ],
    "1220": [
        {
            "tcp": "Yes",
            "udp": "Assigned",
            "iana": "Official",
            "desciption": "QuickTime Streaming Server administration[10]"
        }
    ],
    "1234": [
        {
            "tcp": "Yes",
            "udp": "Yes",
            "iana": "Official",
            "desciption": "Infoseek search agent"
        },
        {
            "tcp": "",
            "udp": "Yes",
            "iana": "Unofficial",
            "desciption": "VLC media player default port for UDP/RTP stream"
        }
    ],
    "1241": [
        {
            "tcp": "Yes",
            "udp": "Yes",
            "iana": "Official",
            "desciption": "Nessus Security Scanner"
        }
    ],
    "1270": [
        {
            "tcp": "Yes",
            "udp": "Yes",
            "iana": "Official",
            "desciption": "Microsoft System Center Operations Manager (SCOM) (formerly Microsoft Operations Manager (MOM)) agent"
        }
    ],
    "1293": [
        {
            "tcp": "Yes",
            "udp": "Yes",
            "iana": "Official",
            "desciption": "Internet Protocol Security (IPSec)"
        }
    ],
    "1311": [
        {
            "tcp": "Yes",
            "udp": "Yes",
            "iana": "Official",
            "desciption": "Windows RxMon.exe"
        },
        {
            "tcp": "Yes",
            "udp": "",
            "iana": "Unofficial",
            "desciption": "Dell OpenManage HTTPS[121]"
        }
    ],
    "1314": [
        {
            "tcp": "?",
            "udp": "?",
            "iana": "Unofficial",
            "desciption": "Festival Speech Synthesis System server[122][self-published source?]"
        }
    ],
    "1337": [
        {
            "tcp": "Yes",
            "udp": "",
            "iana": "Unofficial",
            "desciption": "neo4j-shell[citation needed]"
        },
        {
            "tcp": "Yes",
            "udp": "",
            "iana": "Unofficial",
            "desciption": "Strapi[123]"
        }
    ],
    "1341": [
        {
            "tcp": "Yes",
            "udp": "Yes",
            "iana": "Official",
            "desciption": "Qubes (Manufacturing Execution System)"
        }
    ],
    "1344": [
        {
            "tcp": "Yes",
            "udp": "Yes",
            "iana": "Official",
            "desciption": "Internet Content Adaptation Protocol"
        }
    ],
    "1352": [
        {
            "tcp": "Yes",
            "udp": "Yes",
            "iana": "Official",
            "desciption": "IBM Lotus Notes/Domino (RPC) protocol"
        }
    ],
    "1360": [
        {
            "tcp": "Yes",
            "udp": "Yes",
            "iana": "Official",
            "desciption": "Mimer SQL"
        }
    ],
    "1414": [
        {
            "tcp": "Yes",
            "udp": "Yes",
            "iana": "Official",
            "desciption": "IBM WebSphere MQ (formerly known as MQSeries)"
        }
    ],
    "1417": [
        {
            "tcp": "Yes",
            "udp": "Yes",
            "iana": "Official",
            "desciption": "Timbuktu Service 1 Port"
        }
    ],
    "1418": [
        {
            "tcp": "Yes",
            "udp": "Yes",
            "iana": "Official",
            "desciption": "Timbuktu Service 2 Port"
        }
    ],
    "1419": [
        {
            "tcp": "Yes",
            "udp": "Yes",
            "iana": "Official",
            "desciption": "Timbuktu Service 3 Port"
        }
    ],
    "1420": [
        {
            "tcp": "Yes",
            "udp": "Yes",
            "iana": "Official",
            "desciption": "Timbuktu Service 4 Port"
        }
    ],
    "1431": [
        {
            "tcp": "Yes",
            "udp": "",
            "iana": "Official",
            "desciption": "Reverse Gossip Transport Protocol (RGTP), used to access a General-purpose Reverse-Ordered Gossip Gathering System (GROGGS) bulletin board, such as that implemented on the Cambridge University's Phoenix system"
        }
    ],
    "1433": [
        {
            "tcp": "Yes",
            "udp": "Yes",
            "iana": "Official",
            "desciption": "Microsoft SQL Server database management system (MSSQL) server"
        }
    ],
    "1434": [
        {
            "tcp": "Yes",
            "udp": "Yes",
            "iana": "Official",
            "desciption": "Microsoft SQL Server database management system (MSSQL) monitor"
        }
    ],
    "1481": [
        {
            "tcp": "Yes",
            "udp": "Yes",
            "iana": "Official",
            "desciption": "AIRS data interchange."
        }
    ],
    "1492": [
        {
            "tcp": "Yes",
            "udp": "",
            "iana": "Unofficial",
            "desciption": "Sid Meier's CivNet, a multiplayer remake of the original Sid Meier's Civilization game[citation needed]"
        }
    ],
    "1494": [
        {
            "tcp": "Yes",
            "udp": "Yes",
            "iana": "Unofficial",
            "desciption": "Citrix Independent Computing Architecture (ICA)[125]"
        }
    ],
    "1500": [
        {
            "tcp": "Yes",
            "udp": "",
            "iana": "Unofficial",
            "desciption": "IBM Tivoli Storage Manager server[126]"
        }
    ],
    "1501": [
        {
            "tcp": "Yes",
            "udp": "",
            "iana": "Unofficial",
            "desciption": "IBM Tivoli Storage Manager client scheduler[126]"
        }
    ],
    "1503": [
        {
            "tcp": "Yes",
            "udp": "Yes",
            "iana": "Unofficial",
            "desciption": "Windows Live Messenger (Whiteboard and Application Sharing)[127]"
        }
    ],
    "1512": [
        {
            "tcp": "Yes",
            "udp": "Yes",
            "iana": "Official",
            "desciption": "Microsoft's Windows Internet Name Service (WINS)"
        }
    ],
    "1513": [
        {
            "tcp": "Yes",
            "udp": "Yes",
            "iana": "Unofficial",
            "desciption": "Garena game client[citation needed]"
        }
    ],
    "1521": [
        {
            "tcp": "Yes",
            "udp": "Yes",
            "iana": "Official",
            "desciption": "nCUBE License Manager"
        },
        {
            "tcp": "Yes",
            "udp": "",
            "iana": "Unofficial",
            "desciption": "Oracle database default listener, in future releases[when?][128] official port 2483 (TCP/IP) and 2484 (TCP/IP with SSL)"
        }
    ],
    "1524": [
        {
            "tcp": "Yes",
            "udp": "Yes",
            "iana": "Official",
            "desciption": "ingreslock, ingres"
        }
    ],
    "1527": [
        {
            "tcp": "Yes",
            "udp": "Yes",
            "iana": "Official",
            "desciption": "Oracle Net Services, formerly known as SQL*Net[129]"
        },
        {
            "tcp": "Yes",
            "udp": "",
            "iana": "Unofficial",
            "desciption": "Apache Derby Network Server[130]"
        }
    ],
    "1533": [
        {
            "tcp": "Yes",
            "udp": "Yes",
            "iana": "Official",
            "desciption": "IBM Sametime Virtual Places Chat"
        }
    ],
    "1534": [
        {
            "tcp": "No",
            "udp": "Yes",
            "iana": "Unofficial",
            "desciption": "Eclipse Target Communication Framework [131]"
        }
    ],
    "1540": [
        {
            "tcp": "Yes",
            "udp": "Yes",
            "iana": "Unofficial",
            "desciption": "1C:Enterprise server agent (ragent)[132][133][self-published source]"
        }
    ],
    "1541": [
        {
            "tcp": "Yes",
            "udp": "Yes",
            "iana": "Unofficial",
            "desciption": "1C:Enterprise master cluster manager (rmngr)[132]"
        }
    ],
    "1542": [
        {
            "tcp": "Yes",
            "udp": "Yes",
            "iana": "Unofficial",
            "desciption": "1C:Enterprise configuration repository server[132]"
        }
    ],
    "1545": [
        {
            "tcp": "Yes",
            "udp": "Yes",
            "iana": "Unofficial",
            "desciption": "1C:Enterprise cluster administration server (RAS)[132]"
        }
    ],
    "1547": [
        {
            "tcp": "Yes",
            "udp": "Yes",
            "iana": "Official",
            "desciption": "Laplink"
        }
    ],
    "1550": [
        {
            "tcp": "Yes",
            "udp": "Yes",
            "iana": "Unofficial",
            "desciption": "1C:Enterprise debug server[132]"
        },
        {
            "tcp": "Yes",
            "udp": "",
            "iana": "Unofficial",
            "desciption": "Gadu-Gadu (direct client-to-client)[citation needed]"
        }
    ],
    "1581": [
        {
            "tcp": "Yes",
            "udp": "Yes",
            "iana": "Official",
            "desciption": "MIL STD 2045-47001 VMF"
        },
        {
            "tcp": "Yes",
            "udp": "",
            "iana": "Unofficial",
            "desciption": "IBM Tivoli Storage Manager web client[126]"
        }
    ],
    "1583": [
        {
            "tcp": "?",
            "udp": "?",
            "iana": "Unofficial",
            "desciption": "Pervasive PSQL[134]"
        }
    ],
    "1589": [
        {
            "tcp": "Yes",
            "udp": "Yes",
            "iana": "Official",
            "desciption": "Cisco VLAN Query Protocol (VQP)"
        }
    ],
    "1604": [
        {
            "tcp": "Yes",
            "udp": "Yes",
            "iana": "Unofficial",
            "desciption": "DarkComet remote administration tool (RAT)[citation needed]"
        }
    ],
    "1626": [
        {
            "tcp": "Yes",
            "udp": "?",
            "iana": "Unofficial",
            "desciption": "iSketch[135]"
        }
    ],
    "1627": [
        {
            "tcp": "Yes",
            "udp": "?",
            "iana": "Unofficial",
            "desciption": "iSketch[135]"
        }
    ],
    "1628": [
        {
            "tcp": "Yes",
            "udp": "Yes",
            "iana": "Official",
            "desciption": "LonTalk normal"
        }
    ],
    "1629": [
        {
            "tcp": "Yes",
            "udp": "Yes",
            "iana": "Official",
            "desciption": "LonTalk urgent"
        }
    ],
    "1645": [
        {
            "tcp": "",
            "udp": "Yes",
            "iana": "Unofficial",
            "desciption": "Early deployment of RADIUS before RFC standardization was done using UDP port number 1645. Enabled for compatibility reasons by default on Cisco[citation needed] and Juniper Networks RADIUS servers.[136] Official port is 1812. TCP port 1645 must not be used.[137]"
        }
    ],
    "1646": [
        {
            "tcp": "",
            "udp": "Yes",
            "iana": "Unofficial",
            "desciption": "Old radacct port,[when?] RADIUS accounting protocol. Enabled for compatibility reasons by default on Cisco[citation needed] and Juniper Networks RADIUS servers.[136] Official port is 1813. TCP port 1646 must not be used.[137]"
        }
    ],
    "1666": [
        {
            "tcp": "Yes",
            "udp": "",
            "iana": "Unofficial",
            "desciption": "Perforce[138]"
        }
    ],
    "1677": [
        {
            "tcp": "Yes",
            "udp": "Yes",
            "iana": "Official",
            "desciption": "Novell GroupWise clients in client/server access mode"
        }
    ],
    "1688": [
        {
            "tcp": "Yes",
            "udp": "",
            "iana": "Unofficial",
            "desciption": "Microsoft Key Management Service (KMS) for Windows Activation[139]"
        }
    ],
    "1701": [
        {
            "tcp": "Yes",
            "udp": "Yes",
            "iana": "Official",
            "desciption": "Layer 2 Forwarding Protocol (L2F)"
        },
        {
            "tcp": "Assigned",
            "udp": "Yes",
            "iana": "Official",
            "desciption": "Layer 2 Tunneling Protocol (L2TP)[10]"
        }
    ],
    "1707": [
        {
            "tcp": "Yes",
            "udp": "Yes",
            "iana": "Official",
            "desciption": "Windward Studios games (vdmplay)"
        },
        {
            "tcp": "",
            "udp": "Yes",
            "iana": "Unofficial",
            "desciption": "L2TP/IPsec, for establish an initial connection[140]"
        }
    ],
    "1716": [
        {
            "tcp": "",
            "udp": "Yes",
            "iana": "Unofficial",
            "desciption": "America's Army, a massively multiplayer online game (MMO)[141]"
        }
    ],
    "1719": [
        {
            "tcp": "Yes",
            "udp": "Yes",
            "iana": "Official",
            "desciption": "H.323 registration and alternate communication"
        }
    ],
    "1720": [
        {
            "tcp": "Yes",
            "udp": "Yes",
            "iana": "Official",
            "desciption": "H.323 call signaling"
        }
    ],
    "1723": [
        {
            "tcp": "Yes",
            "udp": "Assigned",
            "iana": "Official",
            "desciption": "Point-to-Point Tunneling Protocol (PPTP)[10]"
        }
    ],
    "1755": [
        {
            "tcp": "Yes",
            "udp": "Yes",
            "iana": "Official",
            "desciption": "Microsoft Media Services (MMS, ms-streaming)"
        }
    ],
    "1761": [
        {
            "tcp": "Yes",
            "udp": "Yes",
            "iana": "Unofficial",
            "desciption": "Novell ZENworks[142][143]"
        }
    ],
    "1783": [
        {
            "tcp": "",
            "udp": "",
            "iana": "Official",
            "desciption": "Decomissioned [sic] Port 04/14/00, ms"
        }
    ],
    "1801": [
        {
            "tcp": "Yes",
            "udp": "Yes",
            "iana": "Official",
            "desciption": "Microsoft Message Queuing"
        }
    ],
    "1812": [
        {
            "tcp": "Yes",
            "udp": "Yes",
            "iana": "Official",
            "desciption": "RADIUS authentication protocol, radius"
        }
    ],
    "1813": [
        {
            "tcp": "Yes",
            "udp": "Yes",
            "iana": "Official",
            "desciption": "RADIUS accounting protocol, radius-acct"
        }
    ],
    "1863": [
        {
            "tcp": "Yes",
            "udp": "Yes",
            "iana": "Official",
            "desciption": "Microsoft Notification Protocol (MSNP), used by the Microsoft Messenger service and a number of instant messaging Messenger clients"
        }
    ],
    "1880": [
        {
            "tcp": "?",
            "udp": "?",
            "iana": "Unofficial",
            "desciption": "Node-RED[144]"
        }
    ],
    "1883": [
        {
            "tcp": "Yes",
            "udp": "Yes",
            "iana": "Official",
            "desciption": "MQTT (formerly MQ Telemetry Transport)"
        }
    ],
    "1900": [
        {
            "tcp": "Assigned",
            "udp": "Yes",
            "iana": "Official",
            "desciption": "Simple Service Discovery Protocol (SSDP),[10] discovery of UPnP devices"
        }
    ],
    "1935": [
        {
            "tcp": "Yes",
            "udp": "Yes",
            "iana": "Official",
            "desciption": "Macromedia Flash Communications Server MX, the precursor to Adobe Flash Media Server before Macromedia's acquisition by Adobe on December 3, 2005"
        },
        {
            "tcp": "Yes",
            "udp": "Yes",
            "iana": "Unofficial",
            "desciption": "Real Time Messaging Protocol (RTMP)[citation needed], primarily used in Adobe Flash[145]"
        }
    ],
    "1965": [
        {
            "tcp": "Yes",
            "udp": "No",
            "iana": "Unofficial",
            "desciption": "Gemini protocol, a lightweight, collaboratively designed protocol, striving to fill the gap between Gopher and HTTP[146]"
        }
    ],
    "1967": [
        {
            "tcp": "",
            "udp": "Yes",
            "iana": "Unofficial",
            "desciption": "Cisco IOS IP Service Level Agreements (IP SLAs) Control Protocol[citation needed]"
        }
    ],
    "1970": [
        {
            "tcp": "Yes",
            "udp": "Yes",
            "iana": "Official",
            "desciption": "Netop Remote Control"
        }
    ],
    "1972": [
        {
            "tcp": "Yes",
            "udp": "Yes",
            "iana": "Official",
            "desciption": "InterSystems Caché"
        }
    ],
    "1984": [
        {
            "tcp": "Yes",
            "udp": "Yes",
            "iana": "Official",
            "desciption": "Big Brother"
        }
    ],
    "1985": [
        {
            "tcp": "Assigned",
            "udp": "Yes",
            "iana": "Official",
            "desciption": "Cisco Hot Standby Router Protocol (HSRP)[147][self-published source]"
        }
    ],
    "1998": [
        {
            "tcp": "Yes",
            "udp": "Yes",
            "iana": "Official",
            "desciption": "Cisco X.25 over TCP (XOT) service"
        }
    ],
    "2000": [
        {
            "tcp": "Yes",
            "udp": "Yes",
            "iana": "Official",
            "desciption": "Cisco Skinny Client Control Protocol (SCCP)"
        }
    ],
    "2010": [
        {
            "tcp": "?",
            "udp": "?",
            "iana": "Unofficial",
            "desciption": "Artemis: Spaceship Bridge Simulator[148][self-published source?]"
        }
    ],
    "2033": [
        {
            "tcp": "Yes",
            "udp": "Yes",
            "iana": "Unofficial",
            "desciption": "Civilization IV multiplayer[149]"
        }
    ],
    "2049": [
        {
            "tcp": "Yes, and SCTP",
            "udp": "Yes",
            "iana": "Official",
            "desciption": "Network File System (NFS)[10]"
        }
    ],
    "2056": [
        {
            "tcp": "Yes",
            "udp": "Yes",
            "iana": "Unofficial",
            "desciption": "Civilization IV multiplayer[149]"
        }
    ],
    "2080": [
        {
            "tcp": "Yes",
            "udp": "Yes",
            "iana": "Official",
            "desciption": "Autodesk NLM (FLEXlm)"
        }
    ],
    "2082": [
        {
            "tcp": "Yes",
            "udp": "",
            "iana": "Unofficial",
            "desciption": "cPanel default[150]"
        }
    ],
    "2083": [
        {
            "tcp": "Yes",
            "udp": "Yes",
            "iana": "Official",
            "desciption": "Secure RADIUS Service (radsec)"
        },
        {
            "tcp": "Yes",
            "udp": "",
            "iana": "Unofficial",
            "desciption": "cPanel default SSL[150]"
        }
    ],
    "2086": [
        {
            "tcp": "Yes",
            "udp": "Yes",
            "iana": "Official",
            "desciption": "GNUnet"
        },
        {
            "tcp": "Yes",
            "udp": "",
            "iana": "Unofficial",
            "desciption": "WebHost Manager default[150]"
        }
    ],
    "2087": [
        {
            "tcp": "Yes",
            "udp": "",
            "iana": "Unofficial",
            "desciption": "WebHost Manager default SSL[150]"
        }
    ],
    "2095": [
        {
            "tcp": "Yes",
            "udp": "",
            "iana": "Official",
            "desciption": "cPanel default web mail[150]"
        }
    ],
    "2096": [
        {
            "tcp": "Yes",
            "udp": "",
            "iana": "Unofficial",
            "desciption": "cPanel default SSL web mail[150]"
        }
    ],
    "2100": [
        {
            "tcp": "Yes",
            "udp": "",
            "iana": "Unofficial",
            "desciption": "Warzone 2100 multiplayer[citation needed]"
        }
    ],
    "2101": [
        {
            "tcp": "Yes",
            "udp": "",
            "iana": "Unofficial",
            "desciption": "Networked Transport of RTCM via Internet Protocol (NTRIP)[citation needed]"
        }
    ],
    "2102": [
        {
            "tcp": "Yes",
            "udp": "Yes",
            "iana": "Official",
            "desciption": "Zephyr Notification Service server"
        }
    ],
    "2103": [
        {
            "tcp": "Yes",
            "udp": "Yes",
            "iana": "Official",
            "desciption": "Zephyr Notification Service serv-hm connection"
        }
    ],
    "2104": [
        {
            "tcp": "Yes",
            "udp": "Yes",
            "iana": "Official",
            "desciption": "Zephyr Notification Service hostmanager"
        }
    ],
    "2123": [
        {
            "tcp": "Yes",
            "udp": "Yes",
            "iana": "Official",
            "desciption": "GTP control messages (GTP-C)"
        }
    ],
    "2142": [
        {
            "tcp": "Yes",
            "udp": "Yes",
            "iana": "Official",
            "desciption": "TDMoIP (TDM over IP)"
        }
    ],
    "2152": [
        {
            "tcp": "Yes",
            "udp": "Yes",
            "iana": "Official",
            "desciption": "GTP user data messages (GTP-U)"
        }
    ],
    "2159": [
        {
            "tcp": "Yes",
            "udp": "Yes",
            "iana": "Official",
            "desciption": "GDB remote debug port"
        }
    ],
    "2181": [
        {
            "tcp": "Yes",
            "udp": "Yes",
            "iana": "Official",
            "desciption": "EForward-document transport system"
        },
        {
            "tcp": "Yes",
            "udp": "",
            "iana": "Unofficial",
            "desciption": "Apache ZooKeeper default client port[citation needed]"
        }
    ],
    "2195": [
        {
            "tcp": "Yes",
            "udp": "",
            "iana": "Unofficial",
            "desciption": "Apple Push Notification Service[10][151]"
        }
    ],
    "2196": [
        {
            "tcp": "Yes",
            "udp": "",
            "iana": "Unofficial",
            "desciption": "Apple Push Notification Service, feedback service[10][151]"
        }
    ],
    "2210": [
        {
            "tcp": "Yes",
            "udp": "Yes",
            "iana": "Official",
            "desciption": "NOAAPORT Broadcast Network"
        }
    ],
    "2211": [
        {
            "tcp": "Yes",
            "udp": "Yes",
            "iana": "Official",
            "desciption": "EMWIN"
        }
    ],
    "2221": [
        {
            "tcp": "Yes",
            "udp": "",
            "iana": "Unofficial",
            "desciption": "ESET anti-virus updates[152]"
        }
    ],
    "2222": [
        {
            "tcp": "Yes",
            "udp": "Yes",
            "iana": "Official",
            "desciption": "EtherNet/IP implicit messaging for IO data"
        },
        {
            "tcp": "?",
            "udp": "?",
            "iana": "Unofficial",
            "desciption": "DirectAdmin Access[153]"
        }
    ],
    "2240": [
        {
            "tcp": "Yes",
            "udp": "Yes",
            "iana": "Official",
            "desciption": "General Dynamics Remote Encryptor Configuration Information Protocol (RECIPe)"
        }
    ],
    "2261": [
        {
            "tcp": "Yes",
            "udp": "Yes",
            "iana": "Official",
            "desciption": "CoMotion master"
        }
    ],
    "2262": [
        {
            "tcp": "Yes",
            "udp": "Yes",
            "iana": "Official",
            "desciption": "CoMotion backup"
        }
    ],
    "2302": [
        {
            "tcp": "",
            "udp": "Yes",
            "iana": "Unofficial",
            "desciption": "ArmA multiplayer[citation needed]"
        },
        {
            "tcp": "",
            "udp": "Yes",
            "iana": "Unofficial",
            "desciption": "Halo: Combat Evolved multiplayer host[154]"
        }
    ],
    "2303": [
        {
            "tcp": "",
            "udp": "Yes",
            "iana": "Unofficial",
            "desciption": "ArmA multiplayer (default port for game +1)[citation needed]"
        },
        {
            "tcp": "",
            "udp": "Yes",
            "iana": "Unofficial",
            "desciption": "Halo: Combat Evolved multiplayer listener[154]"
        }
    ],
    "2305": [
        {
            "tcp": "",
            "udp": "Yes",
            "iana": "Unofficial",
            "desciption": "ArmA multiplayer (default port for game +3)[citation needed]"
        }
    ],
    "2351": [
        {
            "tcp": "Yes",
            "udp": "",
            "iana": "Unofficial",
            "desciption": "AIM game LAN network port[citation needed]"
        }
    ],
    "2368": [
        {
            "tcp": "Yes",
            "udp": "",
            "iana": "Unofficial",
            "desciption": "Ghost (blogging platform)[155]"
        }
    ],
    "2369": [
        {
            "tcp": "Yes",
            "udp": "",
            "iana": "Unofficial",
            "desciption": "Default for BMC Control-M/Server Configuration Agent"
        }
    ],
    "2370": [
        {
            "tcp": "Yes",
            "udp": "",
            "iana": "Unofficial",
            "desciption": "Default for BMC Control-M/Server, to allow the Control-M/Enterprise Manager to connect to the Control-M/Server"
        }
    ],
    "2372": [
        {
            "tcp": "Yes",
            "udp": "",
            "iana": "Unofficial",
            "desciption": "Default for K9 Web Protection/parental controls, content filtering agent[citation needed]"
        }
    ],
    "2375": [
        {
            "tcp": "Yes",
            "udp": "Reserved",
            "iana": "Official",
            "desciption": "Docker REST API (plain)"
        }
    ],
    "2376": [
        {
            "tcp": "Yes",
            "udp": "Reserved",
            "iana": "Official",
            "desciption": "Docker REST API (SSL)"
        }
    ],
    "2377": [
        {
            "tcp": "Yes",
            "udp": "Reserved",
            "iana": "Official",
            "desciption": "Docker Swarm cluster management communications[156][self-published source]"
        }
    ],
    "2379": [
        {
            "tcp": "Yes",
            "udp": "Reserved",
            "iana": "Official",
            "desciption": "CoreOS etcd client communication"
        },
        {
            "tcp": "Yes",
            "udp": "",
            "iana": "Unofficial",
            "desciption": "KGS Go Server[157]"
        }
    ],
    "2380": [
        {
            "tcp": "Yes",
            "udp": "Reserved",
            "iana": "Official",
            "desciption": "CoreOS etcd server communication"
        }
    ],
    "2389": [
        {
            "tcp": "Assigned",
            "udp": "Assigned",
            "iana": "Official",
            "desciption": "OpenView Session Mgr"
        }
    ],
    "2399": [
        {
            "tcp": "Yes",
            "udp": "Yes",
            "iana": "Official",
            "desciption": "FileMaker Data Access Layer (ODBC/JDBC)"
        }
    ],
    "2401": [
        {
            "tcp": "Yes",
            "udp": "Yes",
            "iana": "Official",
            "desciption": "CVS version control system password-based server"
        }
    ],
    "2404": [
        {
            "tcp": "Yes",
            "udp": "Yes",
            "iana": "Official",
            "desciption": "IEC 60870-5-104, used to send electric power telecontrol messages between two systems via directly connected data circuits"
        }
    ],
    "2424": [
        {
            "tcp": "Yes",
            "udp": "",
            "iana": "Unofficial",
            "desciption": "OrientDB database listening for binary client connections[158]"
        }
    ],
    "2427": [
        {
            "tcp": "Yes",
            "udp": "Yes",
            "iana": "Official",
            "desciption": "Media Gateway Control Protocol (MGCP) media gateway"
        }
    ],
    "2447": [
        {
            "tcp": "Yes",
            "udp": "Yes",
            "iana": "Official",
            "desciption": "ovwdb—OpenView Network Node Manager (NNM) daemon"
        }
    ],
    "2459": [
        {
            "tcp": "Yes",
            "udp": "Yes",
            "iana": "Official",
            "desciption": "XRPL"
        }
    ],
    "2480": [
        {
            "tcp": "Yes",
            "udp": "",
            "iana": "Unofficial",
            "desciption": "OrientDB database listening for HTTP client connections[158]"
        }
    ],
    "2483": [
        {
            "tcp": "Yes",
            "udp": "Yes",
            "iana": "Official",
            "desciption": "Oracle database listening for insecure client connections to the listener, replaces port 1521[when?]"
        }
    ],
    "2484": [
        {
            "tcp": "Yes",
            "udp": "Yes",
            "iana": "Official",
            "desciption": "Oracle database listening for SSL client connections to the listener"
        }
    ],
    "2500": [
        {
            "tcp": "Yes",
            "udp": "Yes",
            "iana": "Unofficial",
            "desciption": "NetFS communication[159]"
        }
    ],
    "2501": [
        {
            "tcp": "",
            "udp": "Yes",
            "iana": "Unofficial",
            "desciption": "NetFS probe"
        }
    ],
    "2535": [
        {
            "tcp": "Yes",
            "udp": "Yes",
            "iana": "Official",
            "desciption": "Multicast Address Dynamic Client Allocation Protocol (MADCAP).[160] All standard messages are UDP datagrams.[161]"
        }
    ],
    "2541": [
        {
            "tcp": "Yes",
            "udp": "Yes",
            "iana": "Official",
            "desciption": "LonTalk/IP"
        }
    ],
    "2593": [
        {
            "tcp": "Yes",
            "udp": "Yes",
            "iana": "Unofficial",
            "desciption": "Ultima Online servers[citation needed]"
        }
    ],
    "2598": [
        {
            "tcp": "Yes",
            "udp": "",
            "iana": "Unofficial",
            "desciption": "Citrix Independent Computing Architecture (ICA) with Session Reliability; port 1494 without session reliability[125]"
        }
    ],
    "2599": [
        {
            "tcp": "Yes",
            "udp": "Yes",
            "iana": "Unofficial",
            "desciption": "Ultima Online servers[citation needed]"
        }
    ],
    "2628": [
        {
            "tcp": "Yes",
            "udp": "Yes",
            "iana": "Official",
            "desciption": "DICT [162]"
        }
    ],
    "2638": [
        {
            "tcp": "Yes",
            "udp": "Yes",
            "iana": "Official",
            "desciption": "SQL Anywhere database server[163][164]"
        }
    ],
    "2710": [
        {
            "tcp": "Yes",
            "udp": "Yes",
            "iana": "Unofficial",
            "desciption": "XBT Tracker.[165] UDP tracker extension is considered experimental.[166]"
        }
    ],
    "2727": [
        {
            "tcp": "Yes",
            "udp": "Yes",
            "iana": "Official",
            "desciption": "Media Gateway Control Protocol (MGCP) media gateway controller (call agent)"
        }
    ],
    "2775": [
        {
            "tcp": "Yes",
            "udp": "Yes",
            "iana": "Official",
            "desciption": "Short Message Peer-to-Peer (SMPP)[citation needed]"
        }
    ],
    "2809": [
        {
            "tcp": "Yes",
            "udp": "Yes",
            "iana": "Official",
            "desciption": "corbaloc:iiop URL, per the CORBA 3.0.3 specification"
        }
    ],
    "2811": [
        {
            "tcp": "Yes",
            "udp": "Yes",
            "iana": "Official",
            "desciption": "gsi ftp, per the GridFTP specification"
        }
    ],
    "2827": [
        {
            "tcp": "Yes",
            "udp": "",
            "iana": "Unofficial",
            "desciption": "I2P BOB Bridge[167]"
        }
    ],
    "2944": [
        {
            "tcp": "Yes",
            "udp": "Yes",
            "iana": "Official",
            "desciption": "Megaco text H.248"
        }
    ],
    "2945": [
        {
            "tcp": "Yes",
            "udp": "Yes",
            "iana": "Official",
            "desciption": "Megaco binary (ASN.1) H.248"
        }
    ],
    "2947": [
        {
            "tcp": "Yes",
            "udp": "Yes",
            "iana": "Official",
            "desciption": "gpsd, GPS daemon"
        }
    ],
    "2948": [
        {
            "tcp": "Yes",
            "udp": "Yes",
            "iana": "Official",
            "desciption": "WAP push Multimedia Messaging Service (MMS)"
        }
    ],
    "2949": [
        {
            "tcp": "Yes",
            "udp": "Yes",
            "iana": "Official",
            "desciption": "WAP push secure (MMS)"
        }
    ],
    "2967": [
        {
            "tcp": "Yes",
            "udp": "Yes",
            "iana": "Official",
            "desciption": "Symantec System Center agent (SSC-AGENT)"
        }
    ],
    "3000": [
        {
            "tcp": "Yes",
            "udp": "",
            "iana": "Unofficial",
            "desciption": "Cloud9 IDE server[citation needed]"
        },
        {
            "tcp": "Yes",
            "udp": "",
            "iana": "Unofficial",
            "desciption": "Ruby on Rails development default[168]"
        }
    ],
    "3004": [
        {
            "tcp": "Yes",
            "udp": "",
            "iana": "Unofficial",
            "desciption": "iSync[10]"
        }
    ],
    "3020": [
        {
            "tcp": "Yes",
            "udp": "Yes",
            "iana": "Official",
            "desciption": "Common Internet File System (CIFS). See also port 445 for Server Message Block (SMB), a dialect of CIFS."
        }
    ],
    "3050": [
        {
            "tcp": "Yes",
            "udp": "Yes",
            "iana": "Official",
            "desciption": "gds-db (Interbase/Firebird databases)"
        }
    ],
    "3052": [
        {
            "tcp": "Yes",
            "udp": "Yes",
            "iana": "Official",
            "desciption": "APC PowerChute Network"
        }
    ],
    "3074": [
        {
            "tcp": "Yes",
            "udp": "Yes",
            "iana": "Official",
            "desciption": "Xbox LIVE and Games for Windows – Live"
        }
    ],
    "3101": [
        {
            "tcp": "Yes",
            "udp": "",
            "iana": "Unofficial",
            "desciption": "BlackBerry Enterprise Server communication protocol[171]"
        }
    ],
    "3128": [
        {
            "tcp": "Yes",
            "udp": "?",
            "iana": "Unofficial",
            "desciption": "Squid caching web proxy[172]"
        }
    ],
    "3225": [
        {
            "tcp": "Yes",
            "udp": "Yes",
            "iana": "Official",
            "desciption": "Fibre Channel over IP (FCIP)"
        }
    ],
    "3233": [
        {
            "tcp": "Yes",
            "udp": "Yes",
            "iana": "Official",
            "desciption": "WhiskerControl research control protocol"
        }
    ],
    "3260": [
        {
            "tcp": "Yes",
            "udp": "Yes",
            "iana": "Official",
            "desciption": "iSCSI"
        }
    ],
    "3268": [
        {
            "tcp": "Yes",
            "udp": "Yes",
            "iana": "Official",
            "desciption": "msft-gc, Microsoft Global Catalog (LDAP service which contains data from Active Directory forests)"
        }
    ],
    "3269": [
        {
            "tcp": "Yes",
            "udp": "Yes",
            "iana": "Official",
            "desciption": "msft-gc-ssl, Microsoft Global Catalog over SSL (similar to port 3268, LDAP over SSL)"
        }
    ],
    "3283": [
        {
            "tcp": "Yes",
            "udp": "Yes",
            "iana": "Official",
            "desciption": "Net Assistant,[10] a predecessor to Apple Remote Desktop"
        },
        {
            "tcp": "Yes",
            "udp": "Yes",
            "iana": "Unofficial",
            "desciption": "Apple Remote Desktop 2.0 or later[10]"
        }
    ],
    "3290": [
        {
            "tcp": "",
            "udp": "Yes",
            "iana": "Unofficial",
            "desciption": "Virtual Air Traffic Simulation (VATSIM) network voice communication[citation needed]"
        }
    ],
    "3305": [
        {
            "tcp": "Yes",
            "udp": "Yes",
            "iana": "Official",
            "desciption": "Odette File Transfer Protocol (OFTP)"
        }
    ],
    "3306": [
        {
            "tcp": "Yes",
            "udp": "Assigned",
            "iana": "Official",
            "desciption": "MySQL database system[10]"
        }
    ],
    "3323": [
        {
            "tcp": "Yes",
            "udp": "Yes",
            "iana": "Unofficial",
            "desciption": "DECE GEODI Server"
        }
    ],
    "3332": [
        {
            "tcp": "",
            "udp": "Yes",
            "iana": "Unofficial",
            "desciption": "Thundercloud DataPath Overlay Control"
        }
    ],
    "3333": [
        {
            "tcp": "Yes",
            "udp": "",
            "iana": "Unofficial",
            "desciption": "Eggdrop, an IRC bot default port[173]"
        },
        {
            "tcp": "Yes",
            "udp": "",
            "iana": "Unofficial",
            "desciption": "Network Caller ID server"
        }
    ],
    "3351": [
        {
            "tcp": "?",
            "udp": "?",
            "iana": "Unofficial",
            "desciption": "Pervasive PSQL[134]"
        }
    ],
    "3386": [
        {
            "tcp": "Yes",
            "udp": "Yes",
            "iana": "Official",
            "desciption": "GTP' 3GPP GSM/UMTS CDR logging protocol"
        }
    ],
    "3389": [
        {
            "tcp": "Yes",
            "udp": "Yes",
            "iana": "Official",
            "desciption": "Microsoft Terminal Server (RDP) officially registered as Windows Based Terminal (WBT)[175]"
        }
    ],
    "3396": [
        {
            "tcp": "Yes",
            "udp": "Yes",
            "iana": "Official",
            "desciption": "Novell NDPS Printer Agent"
        }
    ],
    "3412": [
        {
            "tcp": "Yes",
            "udp": "Yes",
            "iana": "Official",
            "desciption": "xmlBlaster"
        }
    ],
    "3423": [
        {
            "tcp": "Yes",
            "udp": "",
            "iana": "Official",
            "desciption": "Xware xTrm Communication Protocol"
        }
    ],
    "3424": [
        {
            "tcp": "Yes",
            "udp": "",
            "iana": "Official",
            "desciption": "Xware xTrm Communication Protocol over SSL"
        }
    ],
    "3455": [
        {
            "tcp": "Yes",
            "udp": "Yes",
            "iana": "Official",
            "desciption": "Resource Reservation Protocol (RSVP)"
        }
    ],
    "3478": [
        {
            "tcp": "Yes",
            "udp": "Yes",
            "iana": "Official",
            "desciption": "STUN, a protocol for NAT traversal[176]"
        },
        {
            "tcp": "Yes",
            "udp": "Yes",
            "iana": "Official",
            "desciption": "TURN, a protocol for NAT traversal[177] (extension to STUN)"
        }
    ],
    "3479": [
        {
            "tcp": "Yes",
            "udp": "Yes",
            "iana": "Unofficial",
            "desciption": "PlayStation Network[179]"
        }
    ],
    "3480": [
        {
            "tcp": "Yes",
            "udp": "Yes",
            "iana": "Unofficial",
            "desciption": "PlayStation Network[179]"
        }
    ],
    "3483": [
        {
            "tcp": "",
            "udp": "Yes",
            "iana": "Official",
            "desciption": "Slim Devices discovery protocol"
        },
        {
            "tcp": "Yes",
            "udp": "",
            "iana": "Official",
            "desciption": "Slim Devices SlimProto protocol"
        }
    ],
    "3493": [
        {
            "tcp": "Yes",
            "udp": "Yes",
            "iana": "Official",
            "desciption": "Network UPS Tools (NUT)"
        }
    ],
    "3516": [
        {
            "tcp": "Yes",
            "udp": "Yes",
            "iana": "Official",
            "desciption": "Smartcard Port"
        }
    ],
    "3527": [
        {
            "tcp": "",
            "udp": "Yes",
            "iana": "Official",
            "desciption": "Microsoft Message Queuing"
        }
    ],
    "3535": [
        {
            "tcp": "Yes",
            "udp": "",
            "iana": "Unofficial",
            "desciption": "SMTP alternate[180]"
        }
    ],
    "3544": [
        {
            "tcp": "",
            "udp": "Yes",
            "iana": "Official",
            "desciption": "Teredo tunneling"
        }
    ],
    "3632": [
        {
            "tcp": "Yes",
            "udp": "Assigned",
            "iana": "Official",
            "desciption": "Distcc, distributed compiler[10]"
        }
    ],
    "3645": [
        {
            "tcp": "Yes",
            "udp": "Yes",
            "iana": "Official",
            "desciption": "Cyc"
        }
    ],
    "3659": [
        {
            "tcp": "Yes",
            "udp": "Yes",
            "iana": "Official",
            "desciption": "Apple SASL, used by Mac OS X Server Password Server[10]"
        },
        {
            "tcp": "",
            "udp": "Yes",
            "iana": "Unofficial",
            "desciption": "Battlefield 4"
        }
    ],
    "3667": [
        {
            "tcp": "Yes",
            "udp": "Yes",
            "iana": "Official",
            "desciption": "Information Exchange"
        }
    ],
    "3689": [
        {
            "tcp": "Yes",
            "udp": "Assigned",
            "iana": "Official",
            "desciption": "Digital Audio Access Protocol (DAAP), used by Apple's iTunes and AirPlay[10]"
        }
    ],
    "3690": [
        {
            "tcp": "Yes",
            "udp": "Yes",
            "iana": "Official",
            "desciption": "Subversion (SVN)[10] version control system"
        }
    ],
    "3702": [
        {
            "tcp": "Yes",
            "udp": "Yes",
            "iana": "Official",
            "desciption": "Web Services Dynamic Discovery (WS-Discovery), used by various components of Windows Vista and later"
        }
    ],
    "3724": [
        {
            "tcp": "Yes",
            "udp": "Yes",
            "iana": "Official",
            "desciption": "Some Blizzard games[120]"
        },
        {
            "tcp": "Yes",
            "udp": "",
            "iana": "Unofficial",
            "desciption": "Club Penguin Disney online game for kids"
        }
    ],
    "3725": [
        {
            "tcp": "Yes",
            "udp": "Yes",
            "iana": "Official",
            "desciption": "Netia NA-ER Port"
        }
    ],
    "3749": [
        {
            "tcp": "Yes",
            "udp": "Yes",
            "iana": "Official",
            "desciption": "CimTrak registered port"
        }
    ],
    "3768": [
        {
            "tcp": "Yes",
            "udp": "Yes",
            "iana": "Official",
            "desciption": "RBLcheckd server daemon"
        }
    ],
    "3784": [
        {
            "tcp": "",
            "udp": "Yes",
            "iana": "Official",
            "desciption": "Bidirectional Forwarding Detection (BFD)for IPv4 and IPv6 (Single Hop) (RFC 5881)"
        }
    ],
    "3785": [
        {
            "tcp": "",
            "udp": "Yes",
            "iana": "Unofficial",
            "desciption": "VoIP program used by Ventrilo"
        }
    ],
    "3799": [
        {
            "tcp": "",
            "udp": "Yes",
            "iana": "Official",
            "desciption": "RADIUS change of authorization"
        }
    ],
    "3804": [
        {
            "tcp": "Yes",
            "udp": "Yes",
            "iana": "Official",
            "desciption": "Harman Professional HiQnet protocol"
        }
    ],
    "3825": [
        {
            "tcp": "Yes",
            "udp": "",
            "iana": "Unofficial",
            "desciption": "RedSeal Networks client/server connection[citation needed]"
        }
    ],
    "3826": [
        {
            "tcp": "Yes",
            "udp": "Yes",
            "iana": "Official",
            "desciption": "WarMUX game server"
        },
        {
            "tcp": "Yes",
            "udp": "",
            "iana": "Unofficial",
            "desciption": "RedSeal Networks client/server connection[citation needed]"
        }
    ],
    "3830": [
        {
            "tcp": "Yes",
            "udp": "Yes",
            "iana": "Official",
            "desciption": "System Management Agent, developed and used by Cerner to monitor and manage solutions"
        }
    ],
    "3835": [
        {
            "tcp": "Yes",
            "udp": "",
            "iana": "Unofficial",
            "desciption": "RedSeal Networks client/server connection[citation needed]"
        }
    ],
    "3856": [
        {
            "tcp": "Yes",
            "udp": "Yes",
            "iana": "Unofficial",
            "desciption": "ERP Server Application used by F10 Software"
        }
    ],
    "3868": [
        {
            "tcp": "Yes, and SCTP",
            "udp": "",
            "iana": "Official",
            "desciption": "Diameter base protocol (RFC 3588)"
        }
    ],
    "3872": [
        {
            "tcp": "Yes",
            "udp": "",
            "iana": "Official",
            "desciption": "Oracle Enterprise Manager Remote Agent"
        }
    ],
    "3880": [
        {
            "tcp": "Yes",
            "udp": "Yes",
            "iana": "Official",
            "desciption": "IGRS"
        }
    ],
    "3900": [
        {
            "tcp": "Yes",
            "udp": "",
            "iana": "Official",
            "desciption": "udt_os, IBM UniData UDT OS[181]"
        }
    ],
    "3960": [
        {
            "tcp": "",
            "udp": "Yes",
            "iana": "Unofficial",
            "desciption": "Warframe online interaction[citation needed]"
        }
    ],
    "3962": [
        {
            "tcp": "",
            "udp": "Yes",
            "iana": "Unofficial",
            "desciption": "Warframe online interaction[citation needed]"
        }
    ],
    "3978": [
        {
            "tcp": "Yes",
            "udp": "",
            "iana": "Unofficial",
            "desciption": "Palo Alto Networks' Panorama management of firewalls and log collectors & pre-PAN-OS 8.0 Panorama-to-managed devices software updates.[182]"
        }
    ],
    "3979": [
        {
            "tcp": "Yes",
            "udp": "Yes",
            "iana": "Unofficial",
            "desciption": "OpenTTD game"
        }
    ],
    "3999": [
        {
            "tcp": "Yes",
            "udp": "Yes",
            "iana": "Official",
            "desciption": "Norman distributed scanning service"
        }
    ],
    "4000": [
        {
            "tcp": "Yes",
            "udp": "Yes",
            "iana": "Unofficial",
            "desciption": "Diablo II game"
        }
    ],
    "4001": [
        {
            "tcp": "Yes",
            "udp": "",
            "iana": "Unofficial",
            "desciption": "Microsoft Ants game"
        },
        {
            "tcp": "Yes",
            "udp": "",
            "iana": "Unofficial",
            "desciption": "CoreOS etcd client communication"
        }
    ],
    "4018": [
        {
            "tcp": "Yes",
            "udp": "Yes",
            "iana": "Official",
            "desciption": "Protocol information and warnings[clarification needed]"
        }
    ],
    "4035": [
        {
            "tcp": "Yes",
            "udp": "",
            "iana": "Unofficial",
            "desciption": "IBM Rational Developer for System z Remote System Explorer Daemon"
        }
    ],
    "4045": [
        {
            "tcp": "Yes",
            "udp": "Yes",
            "iana": "Unofficial",
            "desciption": "Solaris lockd NFS lock daemon/manager"
        }
    ],
    "4050": [
        {
            "tcp": "Yes",
            "udp": "",
            "iana": "Unofficial",
            "desciption": "Mud Master Chat protocol (MMCP) - Peer-to-peer communications between MUD clients.[183]"
        }
    ],
    "4069": [
        {
            "tcp": "",
            "udp": "Yes",
            "iana": "Official",
            "desciption": "Minger Email Address Verification Protocol[184]"
        }
    ],
    "4070": [
        {
            "tcp": "Yes",
            "udp": "Yes",
            "iana": "Unofficial",
            "desciption": "Amazon Echo Dot (Amazon Alexa) streaming connection with Spotify[185]"
        }
    ],
    "4089": [
        {
            "tcp": "Yes",
            "udp": "Yes",
            "iana": "Official",
            "desciption": "OpenCORE Remote Control Service"
        }
    ],
    "4090": [
        {
            "tcp": "Yes",
            "udp": "Yes",
            "iana": "Official",
            "desciption": "Kerio"
        }
    ],
    "4093": [
        {
            "tcp": "Yes",
            "udp": "Yes",
            "iana": "Official",
            "desciption": "PxPlus Client server interface ProvideX"
        }
    ],
    "4096": [
        {
            "tcp": "Yes",
            "udp": "Yes",
            "iana": "Official",
            "desciption": "Ascom Timeplex Bridge Relay Element (BRE)"
        }
    ],
    "4105": [
        {
            "tcp": "Yes",
            "udp": "Yes",
            "iana": "Official",
            "desciption": "Shofar (ShofarNexus)"
        }
    ],
    "4111": [
        {
            "tcp": "Yes",
            "udp": "Assigned",
            "iana": "Official",
            "desciption": "Xgrid[10]"
        }
    ],
    "4116": [
        {
            "tcp": "Yes",
            "udp": "Yes",
            "iana": "Official",
            "desciption": "Smartcard-TLS"
        }
    ],
    "4125": [
        {
            "tcp": "Yes",
            "udp": "",
            "iana": "Unofficial",
            "desciption": "Microsoft Remote Web Workplace administration"
        }
    ],
    "4172": [
        {
            "tcp": "Yes",
            "udp": "Yes",
            "iana": "Official",
            "desciption": "Teradici PCoIP"
        }
    ],
    "4190": [
        {
            "tcp": "Yes",
            "udp": "",
            "iana": "Official",
            "desciption": "ManageSieve[186]"
        }
    ],
    "4198": [
        {
            "tcp": "Yes",
            "udp": "Yes",
            "iana": "Unofficial",
            "desciption": "Couch Potato Android app[187]"
        }
    ],
    "4201": [
        {
            "tcp": "Yes",
            "udp": "",
            "iana": "Unofficial",
            "desciption": "TinyMUD and various derivatives"
        }
    ],
    "4222": [
        {
            "tcp": "Yes",
            "udp": "",
            "iana": "Unofficial",
            "desciption": "NATS server default port[188]"
        }
    ],
    "4226": [
        {
            "tcp": "Yes",
            "udp": "Yes",
            "iana": "Unofficial",
            "desciption": "Aleph One, a computer game"
        }
    ],
    "4242": [
        {
            "tcp": "Yes",
            "udp": "",
            "iana": "Unofficial",
            "desciption": "Orthanc – DICOM server[189]"
        },
        {
            "tcp": "Yes",
            "udp": "",
            "iana": "Unofficial",
            "desciption": "Quassel distributed IRC client"
        }
    ],
    "4243": [
        {
            "tcp": "Yes",
            "udp": "",
            "iana": "Unofficial",
            "desciption": "Docker implementations, redistributions, and setups default[190][needs update?]"
        },
        {
            "tcp": "Yes",
            "udp": "",
            "iana": "Unofficial",
            "desciption": "CrashPlan"
        }
    ],
    "4244": [
        {
            "tcp": "Yes",
            "udp": "Yes",
            "iana": "Unofficial",
            "desciption": "Viber[191]"
        }
    ],
    "4303": [
        {
            "tcp": "Yes",
            "udp": "Yes",
            "iana": "Official",
            "desciption": "Simple Railroad Command Protocol (SRCP)"
        }
    ],
    "4307": [
        {
            "tcp": "Yes",
            "udp": "",
            "iana": "Official",
            "desciption": "TrueConf Client - TrueConf Server media data exchange[192]"
        }
    ],
    "4321": [
        {
            "tcp": "Yes",
            "udp": "",
            "iana": "Official",
            "desciption": "Referral Whois (RWhois) Protocol[193]"
        }
    ],
    "4444": [
        {
            "tcp": "Yes",
            "udp": "Yes",
            "iana": "Unofficial",
            "desciption": "Oracle WebCenter Content: Content Server—Intradoc Socket port. (formerly known as Oracle Universal Content Management)."
        },
        {
            "tcp": "?",
            "udp": "?",
            "iana": "Unofficial",
            "desciption": "Metasploit's default listener port[194]"
        }
    ],
    "4486": [
        {
            "tcp": "Yes",
            "udp": "Yes",
            "iana": "Official",
            "desciption": "Integrated Client Message Service (ICMS)"
        }
    ],
    "4488": [
        {
            "tcp": "Yes",
            "udp": "Assigned",
            "iana": "Official",
            "desciption": "Apple Wide Area Connectivity Service, used by Back to My Mac[10]"
        }
    ],
    "4500": [
        {
            "tcp": "Assigned",
            "udp": "Yes",
            "iana": "Official",
            "desciption": "IPSec NAT Traversal[10] (RFC 3947, RFC 4306)"
        }
    ],
    "4534": [
        {
            "tcp": "",
            "udp": "Yes",
            "iana": "Unofficial",
            "desciption": "Armagetron Advanced server default"
        }
    ],
    "4560": [
        {
            "tcp": "Yes",
            "udp": "",
            "iana": "Unofficial",
            "desciption": "default Log4j socketappender port"
        }
    ],
    "4567": [
        {
            "tcp": "Yes",
            "udp": "",
            "iana": "Unofficial",
            "desciption": "Sinatra default server port in development mode (HTTP)"
        }
    ],
    "4569": [
        {
            "tcp": "",
            "udp": "Yes",
            "iana": "Official",
            "desciption": "Inter-Asterisk eXchange (IAX2)"
        }
    ],
    "4604": [
        {
            "tcp": "Yes",
            "udp": "",
            "iana": "Official",
            "desciption": "Identity Registration Protocol"
        }
    ],
    "4605": [
        {
            "tcp": "Yes",
            "udp": "",
            "iana": "Official",
            "desciption": "Direct End to End Secure Chat Protocol"
        }
    ],
    "4662": [
        {
            "tcp": "Yes",
            "udp": "Yes",
            "iana": "Official",
            "desciption": "OrbitNet Message Service"
        },
        {
            "tcp": "Yes",
            "udp": "",
            "iana": "Unofficial",
            "desciption": "Default for older versions of eMule[195]"
        }
    ],
    "4664": [
        {
            "tcp": "Yes",
            "udp": "",
            "iana": "Unofficial",
            "desciption": "Google Desktop Search"
        }
    ],
    "4672": [
        {
            "tcp": "",
            "udp": "Yes",
            "iana": "Unofficial",
            "desciption": "Default for older versions of eMule[195]"
        }
    ],
    "4711": [
        {
            "tcp": "Yes",
            "udp": "",
            "iana": "Unofficial",
            "desciption": "eMule optional web interface[195]"
        }
    ],
    "4713": [
        {
            "tcp": "Yes",
            "udp": "",
            "iana": "Unofficial",
            "desciption": "PulseAudio sound server"
        }
    ],
    "4728": [
        {
            "tcp": "Yes",
            "udp": "",
            "iana": "Official",
            "desciption": "Computer Associates Desktop and Server Management (DMP)/Port Multiplexer[196]"
        }
    ],
    "4730": [
        {
            "tcp": "Yes",
            "udp": "Yes",
            "iana": "Official",
            "desciption": "Gearman's job server"
        }
    ],
    "4739": [
        {
            "tcp": "Yes",
            "udp": "Yes",
            "iana": "Official",
            "desciption": "IP Flow Information Export"
        }
    ],
    "4747": [
        {
            "tcp": "Yes",
            "udp": "",
            "iana": "Unofficial",
            "desciption": "Apprentice"
        }
    ],
    "4753": [
        {
            "tcp": "Yes",
            "udp": "Yes",
            "iana": "Official",
            "desciption": "SIMON (service and discovery)"
        }
    ],
    "4789": [
        {
            "tcp": "",
            "udp": "Yes",
            "iana": "Official",
            "desciption": "Virtual eXtensible Local Area Network (VXLAN)"
        }
    ],
    "4791": [
        {
            "tcp": "",
            "udp": "Yes",
            "iana": "Official",
            "desciption": "IP Routable RocE (RoCEv2)"
        }
    ],
    "4840": [
        {
            "tcp": "Yes",
            "udp": "Yes",
            "iana": "Official",
            "desciption": "OPC UA Connection Protocol (TCP) and OPC UA Multicast Datagram Protocol (UDP) for OPC Unified Architecture from OPC Foundation"
        }
    ],
    "4843": [
        {
            "tcp": "Yes",
            "udp": "Yes",
            "iana": "Official",
            "desciption": "OPC UA TCP Protocol over TLS/SSL for OPC Unified Architecture from OPC Foundation"
        }
    ],
    "4847": [
        {
            "tcp": "Yes",
            "udp": "Yes",
            "iana": "Official",
            "desciption": "Web Fresh Communication, Quadrion Software & Odorless Entertainment"
        }
    ],
    "4848": [
        {
            "tcp": "Yes",
            "udp": "",
            "iana": "Unofficial",
            "desciption": "Java, Glassfish Application Server administration default"
        }
    ],
    "4894": [
        {
            "tcp": "Yes",
            "udp": "Yes",
            "iana": "Official",
            "desciption": "LysKOM Protocol A"
        }
    ],
    "4944": [
        {
            "tcp": "No",
            "udp": "Yes",
            "iana": "Unofficial",
            "desciption": "DrayTek DSL Status Monitoring[197][self-published source]"
        }
    ],
    "4949": [
        {
            "tcp": "Yes",
            "udp": "",
            "iana": "Official",
            "desciption": "Munin Resource Monitoring Tool"
        }
    ],
    "4950": [
        {
            "tcp": "Yes",
            "udp": "Yes",
            "iana": "Official",
            "desciption": "Cylon Controls UC32 Communications Port"
        }
    ],
    "5000": [
        {
            "tcp": "Yes",
            "udp": "",
            "iana": "Unofficial",
            "desciption": "UPnP—Windows network device interoperability"
        },
        {
            "tcp": "Yes",
            "udp": "Yes",
            "iana": "Unofficial",
            "desciption": "VTun, VPN Software"
        }
    ],
    "5001": [
        {
            "tcp": "Yes",
            "udp": "",
            "iana": "Unofficial",
            "desciption": "Slingbox and Slingplayer"
        },
        {
            "tcp": "Yes",
            "udp": "Yes",
            "iana": "Unofficial",
            "desciption": "Iperf (Tool for measuring TCP and UDP bandwidth performance)"
        }
    ],
    "5002": [
        {
            "tcp": "Yes",
            "udp": "",
            "iana": "Unofficial",
            "desciption": "ASSA ARX access control system[202]"
        }
    ],
    "5003": [
        {
            "tcp": "Yes",
            "udp": "Assigned",
            "iana": "Official",
            "desciption": "FileMaker – name binding and transport[10]"
        }
    ],
    "5004": [
        {
            "tcp": "Yes, and DCCP",
            "udp": "Yes",
            "iana": "Official",
            "desciption": "Real-time Transport Protocol media data (RTP) (RFC 3551, RFC 4571)"
        }
    ],
    "5005": [
        {
            "tcp": "Yes, and DCCP",
            "udp": "Yes",
            "iana": "Official",
            "desciption": "Real-time Transport Protocol control protocol (RTCP) (RFC 3551, RFC 4571)"
        }
    ],
    "5007": [
        {
            "tcp": "Yes",
            "udp": "",
            "iana": "Unofficial",
            "desciption": "Palo Alto Networks - User-ID agent"
        }
    ],
    "5010": [
        {
            "tcp": "Yes",
            "udp": "Yes",
            "iana": "Official",
            "desciption": "Registered to: TelePath (the IBM FlowMark workflow-management system messaging platform)[203]The TCP port is now used for: IBM WebSphere MQ Workflow"
        }
    ],
    "5011": [
        {
            "tcp": "Yes",
            "udp": "Yes",
            "iana": "Official",
            "desciption": "TelePath (the IBM FlowMark workflow-management system messaging platform)[203]"
        }
    ],
    "5025": [
        {
            "tcp": "Yes",
            "udp": "Yes",
            "iana": "Official",
            "desciption": "scpi-raw Standard Commands for Programmable Instruments"
        }
    ],
    "5029": [
        {
            "tcp": "",
            "udp": "Yes",
            "iana": "Unofficial",
            "desciption": "Sonic Robo Blast 2 and Sonic Robo Blast 2 Kart servers"
        }
    ],
    "5031": [
        {
            "tcp": "Yes",
            "udp": "Yes",
            "iana": "Unofficial",
            "desciption": "AVM CAPI-over-TCP (ISDN over Ethernet tunneling)[citation needed]"
        }
    ],
    "5037": [
        {
            "tcp": "Yes",
            "udp": "",
            "iana": "Unofficial",
            "desciption": "Android ADB server"
        }
    ],
    "5044": [
        {
            "tcp": "Yes",
            "udp": "",
            "iana": "Official",
            "desciption": "Standard port in Filebeats/Logstash implementation of Lumberjack protocol."
        }
    ],
    "5048": [
        {
            "tcp": "Yes",
            "udp": "",
            "iana": "Official",
            "desciption": "Texai Message Service"
        }
    ],
    "5050": [
        {
            "tcp": "Yes",
            "udp": "",
            "iana": "Unofficial",
            "desciption": "Yahoo! Messenger"
        }
    ],
    "5051": [
        {
            "tcp": "Yes",
            "udp": "",
            "iana": "Official",
            "desciption": "ita-agent Symantec Intruder Alert[204]"
        }
    ],
    "5060": [
        {
            "tcp": "Yes",
            "udp": "Yes",
            "iana": "Official",
            "desciption": "Session Initiation Protocol (SIP)[10]"
        }
    ],
    "5061": [
        {
            "tcp": "Yes",
            "udp": "",
            "iana": "Official",
            "desciption": "Session Initiation Protocol (SIP) over TLS"
        }
    ],
    "5062": [
        {
            "tcp": "Yes",
            "udp": "Yes",
            "iana": "Official",
            "desciption": "Localisation access"
        }
    ],
    "5064": [
        {
            "tcp": "Yes",
            "udp": "Yes",
            "iana": "Official",
            "desciption": "EPICS Channel Access server[205]"
        }
    ],
    "5065": [
        {
            "tcp": "Assigned",
            "udp": "Yes",
            "iana": "Official",
            "desciption": "EPICS Channel Access repeater beacon[205]"
        }
    ],
    "5070": [
        {
            "tcp": "Yes",
            "udp": "No",
            "iana": "Unofficial",
            "desciption": "Binary Floor Control Protocol (BFCP)[206]"
        }
    ],
    "5084": [
        {
            "tcp": "Yes",
            "udp": "Yes",
            "iana": "Official",
            "desciption": "EPCglobal Low Level Reader Protocol (LLRP)"
        }
    ],
    "5085": [
        {
            "tcp": "Yes",
            "udp": "Yes",
            "iana": "Official",
            "desciption": "EPCglobal Low Level Reader Protocol (LLRP) over TLS"
        }
    ],
    "5090": [
        {
            "tcp": "Yes",
            "udp": "Yes",
            "iana": "Unofficial",
            "desciption": "3CX Phone System 3CX Tunnel Protocol, 3CX App API, 3CX Session Border Controller"
        }
    ],
    "5093": [
        {
            "tcp": "",
            "udp": "Yes",
            "iana": "Official",
            "desciption": "SafeNet, Inc Sentinel LM, Sentinel RMS, License Manager, client-to-server"
        }
    ],
    "5099": [
        {
            "tcp": "Yes",
            "udp": "Yes",
            "iana": "Official",
            "desciption": "SafeNet, Inc Sentinel LM, Sentinel RMS, License Manager, server-to-server"
        }
    ],
    "5104": [
        {
            "tcp": "Yes",
            "udp": "",
            "iana": "Unofficial",
            "desciption": "IBM Tivoli Framework NetCOOL/Impact[207] HTTP Service"
        }
    ],
    "5121": [
        {
            "tcp": "Yes",
            "udp": "",
            "iana": "Unofficial",
            "desciption": "Neverwinter Nights"
        }
    ],
    "5124": [
        {
            "tcp": "Yes",
            "udp": "Yes",
            "iana": "Unofficial",
            "desciption": "TorgaNET (Micronational Darknet)"
        }
    ],
    "5125": [
        {
            "tcp": "Yes",
            "udp": "Yes",
            "iana": "Unofficial",
            "desciption": "TorgaNET (Micronational Intelligence Darknet)"
        }
    ],
    "5150": [
        {
            "tcp": "Yes",
            "udp": "Yes",
            "iana": "Official",
            "desciption": "ATMP Ascend Tunnel Management Protocol[208]"
        }
    ],
    "5151": [
        {
            "tcp": "Yes",
            "udp": "",
            "iana": "Official",
            "desciption": "ESRI SDE Instance"
        },
        {
            "tcp": "",
            "udp": "Yes",
            "iana": "Official",
            "desciption": "ESRI SDE Remote Start"
        }
    ],
    "5154": [
        {
            "tcp": "Yes",
            "udp": "Yes",
            "iana": "Official",
            "desciption": "BZFlag"
        }
    ],
    "5172": [
        {
            "tcp": "Yes",
            "udp": "",
            "iana": "Official",
            "desciption": "PC over IP Endpoint Management[209]"
        }
    ],
    "5190": [
        {
            "tcp": "Yes",
            "udp": "Yes",
            "iana": "Official",
            "desciption": "AOL Instant Messenger protocol.[10] The chat app is defunct as of 15 December 2017[update].[210]"
        }
    ],
    "5198": [
        {
            "tcp": "",
            "udp": "Yes",
            "iana": "Unofficial",
            "desciption": "EchoLink VoIP Amateur Radio Software (Voice)"
        }
    ],
    "5199": [
        {
            "tcp": "",
            "udp": "Yes",
            "iana": "Unofficial",
            "desciption": "EchoLink VoIP Amateur Radio Software (Voice)"
        }
    ],
    "5200": [
        {
            "tcp": "Yes",
            "udp": "",
            "iana": "Unofficial",
            "desciption": "EchoLink VoIP Amateur Radio Software (Information)"
        }
    ],
    "5201": [
        {
            "tcp": "Yes",
            "udp": "Yes",
            "iana": "Unofficial",
            "desciption": "Iperf3 (Tool for measuring TCP and UDP bandwidth performance)"
        }
    ],
    "5222": [
        {
            "tcp": "Yes",
            "udp": "Reserved",
            "iana": "Official",
            "desciption": "Extensible Messaging and Presence Protocol (XMPP) client connection[10][211][212]"
        }
    ],
    "5223": [
        {
            "tcp": "Yes",
            "udp": "",
            "iana": "Unofficial",
            "desciption": "Apple Push Notification Service[10][151]"
        },
        {
            "tcp": "Yes",
            "udp": "",
            "iana": "Unofficial",
            "desciption": "Extensible Messaging and Presence Protocol (XMPP) client connection over SSL"
        }
    ],
    "5228": [
        {
            "tcp": "Yes",
            "udp": "",
            "iana": "Official",
            "desciption": "HP Virtual Room Service"
        },
        {
            "tcp": "Yes",
            "udp": "",
            "iana": "Unofficial",
            "desciption": "Google Play, Android Cloud to Device Messaging Service, Google Cloud Messaging"
        }
    ],
    "5242": [
        {
            "tcp": "Yes",
            "udp": "Yes",
            "iana": "Unofficial",
            "desciption": "Viber[191]"
        }
    ],
    "5243": [
        {
            "tcp": "Yes",
            "udp": "Yes",
            "iana": "Unofficial",
            "desciption": "Viber[191]"
        }
    ],
    "5246": [
        {
            "tcp": "",
            "udp": "Yes",
            "iana": "Official",
            "desciption": "Control And Provisioning of Wireless Access Points (CAPWAP) CAPWAP control[213]"
        }
    ],
    "5247": [
        {
            "tcp": "",
            "udp": "Yes",
            "iana": "Official",
            "desciption": "Control And Provisioning of Wireless Access Points (CAPWAP) CAPWAP data[213]"
        }
    ],
    "5269": [
        {
            "tcp": "Yes",
            "udp": "",
            "iana": "Official",
            "desciption": "Extensible Messaging and Presence Protocol (XMPP) server-to-server connection[10][211][212]"
        }
    ],
    "5280": [
        {
            "tcp": "Yes",
            "udp": "",
            "iana": "Official",
            "desciption": "Extensible Messaging and Presence Protocol (XMPP)[214]"
        }
    ],
    "5281": [
        {
            "tcp": "Yes",
            "udp": "",
            "iana": "Unofficial",
            "desciption": "Extensible Messaging and Presence Protocol (XMPP)[215]"
        }
    ],
    "5298": [
        {
            "tcp": "Yes",
            "udp": "Yes",
            "iana": "Official",
            "desciption": "Extensible Messaging and Presence Protocol (XMPP)[216]"
        }
    ],
    "5310": [
        {
            "tcp": "Assigned",
            "udp": "Yes",
            "iana": "Official",
            "desciption": "Outlaws, a 1997 first-person shooter video game[citation needed]"
        }
    ],
    "5318": [
        {
            "tcp": "Yes",
            "udp": "Reserved",
            "iana": "Official",
            "desciption": "Certificate Management over CMS[217]"
        }
    ],
    "5349": [
        {
            "tcp": "Yes/No",
            "udp": "Yes/No",
            "iana": "Official",
            "desciption": "STUN over TLS/DTLS, a protocol for NAT traversal[176]"
        },
        {
            "tcp": "Yes/No",
            "udp": "Yes/No",
            "iana": "Official",
            "desciption": "TURN over TLS/DTLS, a protocol for NAT traversal[177]"
        }
    ],
    "5351": [
        {
            "tcp": "Reserved",
            "udp": "Yes",
            "iana": "Official",
            "desciption": "NAT Port Mapping Protocol and Port Control Protocol—client-requested configuration for connections through network address translators and firewalls"
        }
    ],
    "5353": [
        {
            "tcp": "Assigned",
            "udp": "Yes",
            "iana": "Official",
            "desciption": "Multicast DNS (mDNS)[10]"
        }
    ],
    "5355": [
        {
            "tcp": "Yes",
            "udp": "Yes",
            "iana": "Official",
            "desciption": "Link-Local Multicast Name Resolution (LLMNR), allows hosts to perform name resolution for hosts on the same local link (only provided by Windows Vista and Server 2008)"
        }
    ],
    "5357": [
        {
            "tcp": "Yes",
            "udp": "Yes",
            "iana": "Unofficial",
            "desciption": "Web Services for Devices (WSDAPI) (only provided by Windows Vista, Windows 7 and Server 2008)"
        }
    ],
    "5358": [
        {
            "tcp": "Yes",
            "udp": "Yes",
            "iana": "Unofficial",
            "desciption": "WSDAPI Applications to Use a Secure Channel (only provided by Windows Vista, Windows 7 and Server 2008)"
        }
    ],
    "5394": [
        {
            "tcp": "",
            "udp": "Yes",
            "iana": "Unofficial",
            "desciption": "Kega Fusion, a Sega multi-console emulator[218][219]"
        }
    ],
    "5402": [
        {
            "tcp": "Yes",
            "udp": "Yes",
            "iana": "Official",
            "desciption": "Multicast File Transfer Protocol (MFTP)[220][importance?]"
        }
    ],
    "5405": [
        {
            "tcp": "Yes",
            "udp": "Yes",
            "iana": "Official",
            "desciption": "NetSupport Manager"
        }
    ],
    "5412": [
        {
            "tcp": "Yes",
            "udp": "Yes",
            "iana": "Official",
            "desciption": "IBM Rational Synergy (Telelogic Synergy) (Continuus CM) Message Router"
        }
    ],
    "5413": [
        {
            "tcp": "Yes",
            "udp": "Yes",
            "iana": "Official",
            "desciption": "Wonderware SuiteLink service"
        }
    ],
    "5417": [
        {
            "tcp": "Yes",
            "udp": "Yes",
            "iana": "Official",
            "desciption": "SNS Agent"
        }
    ],
    "5421": [
        {
            "tcp": "Yes",
            "udp": "Yes",
            "iana": "Official",
            "desciption": "NetSupport Manager"
        }
    ],
    "5432": [
        {
            "tcp": "Yes",
            "udp": "Assigned",
            "iana": "Official",
            "desciption": "PostgreSQL[10] database system"
        }
    ],
    "5433": [
        {
            "tcp": "Yes",
            "udp": "",
            "iana": "Unofficial",
            "desciption": "Bouwsoft file/webserver[221]"
        }
    ],
    "5445": [
        {
            "tcp": "",
            "udp": "Yes",
            "iana": "Unofficial",
            "desciption": "Cisco Unified Video Advantage[citation needed]"
        }
    ],
    "5480": [
        {
            "tcp": "Yes",
            "udp": "",
            "iana": "Unofficial",
            "desciption": "VMware VAMI (Virtual Appliance Management Infrastructure)—used for initial setup of various administration settings on Virtual Appliances designed using the VAMI architecture."
        }
    ],
    "5481": [
        {
            "tcp": "Yes",
            "udp": "",
            "iana": "Unofficial",
            "desciption": "Schneider Electric's ClearSCADA (SCADA implementation for Windows) — used for client-to-server communication.[222]"
        }
    ],
    "5495": [
        {
            "tcp": "Yes",
            "udp": "",
            "iana": "Unofficial",
            "desciption": "IBM Cognos TM1 Admin server"
        }
    ],
    "5498": [
        {
            "tcp": "Yes",
            "udp": "",
            "iana": "Unofficial",
            "desciption": "Hotline tracker server connection"
        }
    ],
    "5499": [
        {
            "tcp": "",
            "udp": "Yes",
            "iana": "Unofficial",
            "desciption": "Hotline tracker server discovery"
        }
    ],
    "5500": [
        {
            "tcp": "Yes",
            "udp": "",
            "iana": "Unofficial",
            "desciption": "Hotline control connection"
        },
        {
            "tcp": "Yes",
            "udp": "",
            "iana": "Unofficial",
            "desciption": "VNC Remote Frame Buffer RFB protocol—for incoming listening viewer"
        }
    ],
    "5501": [
        {
            "tcp": "Yes",
            "udp": "",
            "iana": "Unofficial",
            "desciption": "Hotline file transfer connection"
        }
    ],
    "5517": [
        {
            "tcp": "Yes",
            "udp": "",
            "iana": "Unofficial",
            "desciption": "Setiqueue Proxy server client for SETI@Home project"
        }
    ],
    "5550": [
        {
            "tcp": "Yes",
            "udp": "",
            "iana": "Unofficial",
            "desciption": "Hewlett-Packard Data Protector[citation needed]"
        }
    ],
    "5554": [
        {
            "tcp": "Yes",
            "udp": "Yes",
            "iana": "Unofficial",
            "desciption": "Fastboot default wireless port"
        }
    ],
    "5555": [
        {
            "tcp": "Yes",
            "udp": "Yes",
            "iana": "Unofficial",
            "desciption": "Oracle WebCenter Content: Inbound Refinery—Intradoc Socket port. (formerly known as Oracle Universal Content Management). Port though often changed during installation"
        },
        {
            "tcp": "Yes",
            "udp": "",
            "iana": "Unofficial",
            "desciption": "Freeciv versions up to 2.0, Hewlett-Packard Data Protector, McAfee EndPoint Encryption Database Server, SAP, Default for Microsoft Dynamics CRM 4.0, Softether VPN default port"
        }
    ],
    "5556": [
        {
            "tcp": "Yes",
            "udp": "Yes",
            "iana": "Official",
            "desciption": "Freeciv, Oracle WebLogic Server Node Manager[223]"
        }
    ],
    "5568": [
        {
            "tcp": "Yes",
            "udp": "Yes",
            "iana": "Official",
            "desciption": "Session Data Transport (SDT), a part of Architecture for Control Networks (ACN)[224][full citation needed]"
        }
    ],
    "5601": [
        {
            "tcp": "Yes",
            "udp": "",
            "iana": "Unofficial",
            "desciption": "Kibana[citation needed]"
        }
    ],
    "5631": [
        {
            "tcp": "Yes",
            "udp": "",
            "iana": "Official",
            "desciption": "pcANYWHEREdata, Symantec pcAnywhere (version 7.52 and later[225])[226] data"
        }
    ],
    "5632": [
        {
            "tcp": "",
            "udp": "Yes",
            "iana": "Official",
            "desciption": "pcANYWHEREstat, Symantec pcAnywhere (version 7.52 and later) status"
        }
    ],
    "5656": [
        {
            "tcp": "Yes",
            "udp": "",
            "iana": "Unofficial",
            "desciption": "IBM Lotus Sametime p2p file transfer"
        }
    ],
    "5666": [
        {
            "tcp": "Yes",
            "udp": "",
            "iana": "Unofficial",
            "desciption": "NRPE (Nagios)"
        }
    ],
    "5667": [
        {
            "tcp": "Yes",
            "udp": "",
            "iana": "Unofficial",
            "desciption": "NSCA (Nagios)"
        }
    ],
    "5670": [
        {
            "tcp": "Yes",
            "udp": "",
            "iana": "Official",
            "desciption": "FILEMQ ZeroMQ File Message Queuing Protocol"
        },
        {
            "tcp": "",
            "udp": "Yes",
            "iana": "Official",
            "desciption": "ZRE-DISC ZeroMQ Realtime Exchange Protocol (Discovery)"
        }
    ],
    "5671": [
        {
            "tcp": "Yes",
            "udp": "Assigned",
            "iana": "Official",
            "desciption": "Advanced Message Queuing Protocol (AMQP)[227] over TLS"
        }
    ],
    "5672": [
        {
            "tcp": "Yes, and SCTP",
            "udp": "Assigned",
            "iana": "Official",
            "desciption": "Advanced Message Queuing Protocol (AMQP)[227]"
        }
    ],
    "5683": [
        {
            "tcp": "Yes",
            "udp": "Yes",
            "iana": "Official",
            "desciption": "Constrained Application Protocol (CoAP)"
        }
    ],
    "5684": [
        {
            "tcp": "Yes/No",
            "udp": "Yes",
            "iana": "Official",
            "desciption": "Constrained Application Protocol Secure (CoAPs)"
        }
    ],
    "5693": [
        {
            "tcp": "Yes",
            "udp": "",
            "iana": "Unofficial",
            "desciption": "Nagios Cross Platform Agent (NCPA)[228]"
        }
    ],
    "5701": [
        {
            "tcp": "Yes",
            "udp": "",
            "iana": "Unofficial",
            "desciption": "Hazelcast default communication port[229]"
        }
    ],
    "5718": [
        {
            "tcp": "Yes",
            "udp": "",
            "iana": "Unofficial",
            "desciption": "Microsoft DPM Data Channel (with the agent coordinator)"
        }
    ],
    "5719": [
        {
            "tcp": "Yes",
            "udp": "",
            "iana": "Unofficial",
            "desciption": "Microsoft DPM Data Channel (with the protection agent)"
        }
    ],
    "5722": [
        {
            "tcp": "Yes",
            "udp": "Yes",
            "iana": "Official",
            "desciption": "Microsoft RPC, DFSR (SYSVOL) Replication Service[citation needed]"
        }
    ],
    "5723": [
        {
            "tcp": "Yes",
            "udp": "",
            "iana": "Unofficial",
            "desciption": "System Center Operations Manager[230]"
        }
    ],
    "5724": [
        {
            "tcp": "Yes",
            "udp": "",
            "iana": "Unofficial",
            "desciption": "Operations Manager Console"
        }
    ],
    "5741": [
        {
            "tcp": "Yes",
            "udp": "Yes",
            "iana": "Official",
            "desciption": "IDA Discover Port 1"
        }
    ],
    "5742": [
        {
            "tcp": "Yes",
            "udp": "Yes",
            "iana": "Official",
            "desciption": "IDA Discover Port 2"
        }
    ],
    "5800": [
        {
            "tcp": "Yes",
            "udp": "",
            "iana": "Unofficial",
            "desciption": "VNC Remote Frame Buffer RFB protocol over HTTP"
        },
        {
            "tcp": "Yes",
            "udp": "",
            "iana": "Unofficial",
            "desciption": "ProjectWise Server[231]"
        }
    ],
    "5900": [
        {
            "tcp": "Yes",
            "udp": "Yes",
            "iana": "Official",
            "desciption": "Remote Frame Buffer protocol (RFB)"
        },
        {
            "tcp": "Yes",
            "udp": "",
            "iana": "Unofficial",
            "desciption": "Virtual Network Computing (VNC) Remote Frame Buffer RFB protocol[10][232]"
        }
    ],
    "5905": [
        {
            "tcp": "Yes",
            "udp": "",
            "iana": "Unofficial",
            "desciption": "Windows service \"C:\\Program Files\\Intel\\Intel(R) Online Connect Access\\IntelTechnologyAccessService.exe\" that listens on 127.0.0.1"
        }
    ],
    "5931": [
        {
            "tcp": "Yes",
            "udp": "Yes",
            "iana": "Official",
            "desciption": "AMMYY admin Remote Control"
        }
    ],
    "5938": [
        {
            "tcp": "Yes",
            "udp": "Yes",
            "iana": "Unofficial",
            "desciption": "TeamViewer remote desktop protocol[233]"
        }
    ],
    "5984": [
        {
            "tcp": "Yes",
            "udp": "Yes",
            "iana": "Official",
            "desciption": "CouchDB database server"
        }
    ],
    "5985": [
        {
            "tcp": "Yes",
            "udp": "",
            "iana": "Official",
            "desciption": "Windows PowerShell Default psSession Port[234] Windows Remote Management Service (WinRM-HTTP)[235]"
        }
    ],
    "5986": [
        {
            "tcp": "Yes",
            "udp": "",
            "iana": "Official",
            "desciption": "Windows PowerShell Default psSession Port[234] Windows Remote Management Service (WinRM-HTTPS)[235]"
        }
    ],
    "6005": [
        {
            "tcp": "Yes",
            "udp": "",
            "iana": "Unofficial",
            "desciption": "Default for BMC Software Control-M/Server—Socket used for communication between Control-M processes—though often changed during installation"
        },
        {
            "tcp": "Yes",
            "udp": "",
            "iana": "Unofficial",
            "desciption": "Default for Camfrog chat & cam client"
        }
    ],
    "6009": [
        {
            "tcp": "Yes",
            "udp": "",
            "iana": "Unofficial",
            "desciption": "JD Edwards EnterpriseOne ERP system JDENet messaging client listener"
        }
    ],
    "6050": [
        {
            "tcp": "Yes",
            "udp": "",
            "iana": "Unofficial",
            "desciption": "Arcserve backup"
        }
    ],
    "6051": [
        {
            "tcp": "Yes",
            "udp": "",
            "iana": "Unofficial",
            "desciption": "Arcserve backup"
        }
    ],
    "6086": [
        {
            "tcp": "Yes",
            "udp": "",
            "iana": "Official",
            "desciption": "Peer Distributed Transfer Protocol (PDTP), FTP like file server in a P2P network"
        }
    ],
    "6100": [
        {
            "tcp": "Yes",
            "udp": "",
            "iana": "Unofficial",
            "desciption": "Vizrt System"
        },
        {
            "tcp": "Yes",
            "udp": "",
            "iana": "Unofficial",
            "desciption": "Ventrilo authentication for version 3"
        }
    ],
    "6101": [
        {
            "tcp": "Yes",
            "udp": "",
            "iana": "Unofficial",
            "desciption": "Backup Exec Agent Browser[citation needed]"
        }
    ],
    "6110": [
        {
            "tcp": "Yes",
            "udp": "Yes",
            "iana": "Official",
            "desciption": "softcm, HP Softbench CM"
        }
    ],
    "6111": [
        {
            "tcp": "Yes",
            "udp": "Yes",
            "iana": "Official",
            "desciption": "spc, HP Softbench Sub-Process Control"
        }
    ],
    "6112": [
        {
            "tcp": "Yes",
            "udp": "Yes",
            "iana": "Official",
            "desciption": "dtspcd, execute commands and launch applications remotely"
        },
        {
            "tcp": "Yes",
            "udp": "Yes",
            "iana": "Unofficial",
            "desciption": "Blizzard's Battle.net gaming service and some games,[120] ArenaNet gaming service, Relic gaming service"
        }
    ],
    "6113": [
        {
            "tcp": "Yes",
            "udp": "",
            "iana": "Unofficial",
            "desciption": "Club Penguin Disney online game for kids, Used by some Blizzard games[120]"
        }
    ],
    "6136": [
        {
            "tcp": "Yes",
            "udp": "",
            "iana": "Unofficial",
            "desciption": "ObjectDB database server[237][self-published source]"
        }
    ],
    "6159": [
        {
            "tcp": "Yes",
            "udp": "",
            "iana": "Official",
            "desciption": "ARINC 840 EFB Application Control Interface"
        }
    ],
    "6200": [
        {
            "tcp": "Yes",
            "udp": "",
            "iana": "Unofficial",
            "desciption": "Oracle WebCenter Content Portable: Content Server (With Native UI) and Inbound Refinery"
        }
    ],
    "6201": [
        {
            "tcp": "Yes",
            "udp": "",
            "iana": "Unofficial",
            "desciption": "Oracle WebCenter Content Portable: Admin"
        }
    ],
    "6225": [
        {
            "tcp": "Yes",
            "udp": "",
            "iana": "Unofficial",
            "desciption": "Oracle WebCenter Content Portable: Content Server Web UI"
        }
    ],
    "6227": [
        {
            "tcp": "Yes",
            "udp": "",
            "iana": "Unofficial",
            "desciption": "Oracle WebCenter Content Portable: JavaDB"
        }
    ],
    "6240": [
        {
            "tcp": "Yes",
            "udp": "",
            "iana": "Unofficial",
            "desciption": "Oracle WebCenter Content Portable: Capture"
        }
    ],
    "6244": [
        {
            "tcp": "Yes",
            "udp": "Yes",
            "iana": "Unofficial",
            "desciption": "Oracle WebCenter Content Portable: Content Server—Intradoc Socket port"
        }
    ],
    "6255": [
        {
            "tcp": "Yes",
            "udp": "Yes",
            "iana": "Unofficial",
            "desciption": "Oracle WebCenter Content Portable: Inbound Refinery—Intradoc Socket port"
        }
    ],
    "6257": [
        {
            "tcp": "",
            "udp": "Yes",
            "iana": "Unofficial",
            "desciption": "WinMX (see also 6699)"
        }
    ],
    "6260": [
        {
            "tcp": "Yes",
            "udp": "Yes",
            "iana": "Unofficial",
            "desciption": "planet M.U.L.E."
        }
    ],
    "6262": [
        {
            "tcp": "Yes",
            "udp": "",
            "iana": "Unofficial",
            "desciption": "Sybase Advantage Database Server"
        }
    ],
    "6343": [
        {
            "tcp": "",
            "udp": "Yes",
            "iana": "Official",
            "desciption": "SFlow, sFlow traffic monitoring"
        }
    ],
    "6346": [
        {
            "tcp": "Yes",
            "udp": "Yes",
            "iana": "Official",
            "desciption": "gnutella-svc, gnutella (FrostWire, Limewire, Shareaza, etc.)"
        }
    ],
    "6347": [
        {
            "tcp": "Yes",
            "udp": "Yes",
            "iana": "Official",
            "desciption": "gnutella-rtr, Gnutella alternate"
        }
    ],
    "6350": [
        {
            "tcp": "Yes",
            "udp": "Yes",
            "iana": "Official",
            "desciption": "App Discovery and Access Protocol"
        }
    ],
    "6379": [
        {
            "tcp": "Yes",
            "udp": "",
            "iana": "Official",
            "desciption": "Redis key-value data store"
        }
    ],
    "6389": [
        {
            "tcp": "Yes",
            "udp": "",
            "iana": "Unofficial",
            "desciption": "EMC CLARiiON"
        }
    ],
    "6432": [
        {
            "tcp": "Yes",
            "udp": "",
            "iana": "Official",
            "desciption": "PgBouncer—A connection pooler for PostgreSQL"
        }
    ],
    "6436": [
        {
            "tcp": "Yes",
            "udp": "",
            "iana": "Unofficial",
            "desciption": "Leap Motion Websocket Server TLS"
        }
    ],
    "6437": [
        {
            "tcp": "Yes",
            "udp": "",
            "iana": "Unofficial",
            "desciption": "Leap Motion Websocket Server"
        }
    ],
    "6444": [
        {
            "tcp": "Yes",
            "udp": "Yes",
            "iana": "Official",
            "desciption": "Sun Grid Engine Qmaster Service"
        }
    ],
    "6445": [
        {
            "tcp": "Yes",
            "udp": "Yes",
            "iana": "Official",
            "desciption": "Sun Grid Engine Execution Service"
        }
    ],
    "6464": [
        {
            "tcp": "Yes",
            "udp": "Yes",
            "iana": "Official",
            "desciption": "Port assignment for medical device communication in accordance to IEEE 11073-20701"
        }
    ],
    "6502": [
        {
            "tcp": "Yes",
            "udp": "Yes",
            "iana": "Unofficial",
            "desciption": "Netop Remote Control"
        }
    ],
    "6513": [
        {
            "tcp": "Yes",
            "udp": "",
            "iana": "Official",
            "desciption": "NETCONF over TLS"
        }
    ],
    "6514": [
        {
            "tcp": "Yes",
            "udp": "",
            "iana": "Official",
            "desciption": "Syslog over TLS[239]"
        }
    ],
    "6515": [
        {
            "tcp": "Yes",
            "udp": "Yes",
            "iana": "Official",
            "desciption": "Elipse RPC Protocol (REC)"
        }
    ],
    "6516": [
        {
            "tcp": "",
            "udp": "",
            "iana": "Unofficial",
            "desciption": "Windows Admin Center"
        }
    ],
    "6543": [
        {
            "tcp": "Yes",
            "udp": "",
            "iana": "Unofficial",
            "desciption": "Pylons project#Pyramid Default Pylons Pyramid web service port"
        }
    ],
    "6556": [
        {
            "tcp": "Yes",
            "udp": "",
            "iana": "Unofficial",
            "desciption": "Check MK Agent"
        }
    ],
    "6566": [
        {
            "tcp": "Yes",
            "udp": "",
            "iana": "Official",
            "desciption": "SANE (Scanner Access Now Easy)—SANE network scanner daemon[240]"
        }
    ],
    "6571": [
        {
            "tcp": "",
            "udp": "",
            "iana": "Unofficial",
            "desciption": "Windows Live FolderShare client"
        }
    ],
    "6600": [
        {
            "tcp": "Yes",
            "udp": "",
            "iana": "Official",
            "desciption": "Microsoft Hyper-V Live"
        },
        {
            "tcp": "Yes",
            "udp": "",
            "iana": "Unofficial",
            "desciption": "Music Player Daemon (MPD)"
        }
    ],
    "6601": [
        {
            "tcp": "Yes",
            "udp": "",
            "iana": "Official",
            "desciption": "Microsoft Forefront Threat Management Gateway"
        }
    ],
    "6602": [
        {
            "tcp": "Yes",
            "udp": "",
            "iana": "Official",
            "desciption": "Microsoft Windows WSS Communication"
        }
    ],
    "6619": [
        {
            "tcp": "Yes",
            "udp": "Yes",
            "iana": "Official",
            "desciption": "odette-ftps, Odette File Transfer Protocol (OFTP) over TLS/SSL"
        }
    ],
    "6622": [
        {
            "tcp": "Yes",
            "udp": "Yes",
            "iana": "Official",
            "desciption": "Multicast FTP"
        }
    ],
    "6653": [
        {
            "tcp": "Yes",
            "udp": "Assigned",
            "iana": "Official",
            "desciption": "OpenFlow[citation needed]"
        }
    ],
    "6679": [
        {
            "tcp": "Yes",
            "udp": "Yes",
            "iana": "Official",
            "desciption": "Osorno Automation Protocol (OSAUT)"
        },
        {
            "tcp": "Yes",
            "udp": "",
            "iana": "Unofficial",
            "desciption": "IRC SSL (Secure Internet Relay Chat)—often used"
        }
    ],
    "6690": [
        {
            "tcp": "Yes",
            "udp": "",
            "iana": "Unofficial",
            "desciption": "Synology Cloud station"
        }
    ],
    "6697": [
        {
            "tcp": "Yes",
            "udp": "",
            "iana": "Official",
            "desciption": "IRC SSL (Secure Internet Relay Chat)—often used"
        }
    ],
    "6699": [
        {
            "tcp": "Yes",
            "udp": "",
            "iana": "Unofficial",
            "desciption": "WinMX (see also 6257)"
        }
    ],
    "6715": [
        {
            "tcp": "Yes",
            "udp": "",
            "iana": "Unofficial",
            "desciption": "AberMUD and derivatives default port"
        }
    ],
    "6771": [
        {
            "tcp": "",
            "udp": "Yes",
            "iana": "Unofficial",
            "desciption": "BitTorrent Local Peer Discovery"
        }
    ],
    "6888": [
        {
            "tcp": "Yes",
            "udp": "Yes",
            "iana": "Official",
            "desciption": "MUSE"
        },
        {
            "tcp": "Yes",
            "udp": "Yes",
            "iana": "Unofficial",
            "desciption": "BitTorrent part of full range of ports used most often"
        }
    ],
    "6901": [
        {
            "tcp": "Yes",
            "udp": "Yes",
            "iana": "Unofficial",
            "desciption": "Windows Live Messenger (Voice)"
        },
        {
            "tcp": "Yes",
            "udp": "Yes",
            "iana": "Unofficial",
            "desciption": "BitTorrent part of full range of ports used most often"
        }
    ],
    "6969": [
        {
            "tcp": "Yes",
            "udp": "Yes",
            "iana": "Official",
            "desciption": "acmsoda"
        },
        {
            "tcp": "Yes",
            "udp": "",
            "iana": "Unofficial",
            "desciption": "BitTorrent tracker"
        }
    ],
    "7000": [
        {
            "tcp": "Yes",
            "udp": "",
            "iana": "Unofficial",
            "desciption": "Default for Vuze's built-in HTTPS Bittorrent Tracker"
        },
        {
            "tcp": "Yes",
            "udp": "",
            "iana": "Unofficial",
            "desciption": "Avira Server Management Console"
        }
    ],
    "7001": [
        {
            "tcp": "Yes",
            "udp": "",
            "iana": "Unofficial",
            "desciption": "Avira Server Management Console"
        },
        {
            "tcp": "Yes",
            "udp": "",
            "iana": "Unofficial",
            "desciption": "Default for BEA WebLogic Server's HTTP server, though often changed during installation"
        }
    ],
    "7002": [
        {
            "tcp": "Yes",
            "udp": "",
            "iana": "Unofficial",
            "desciption": "Default for BEA WebLogic Server's HTTPS server, though often changed during installation"
        }
    ],
    "7005": [
        {
            "tcp": "Yes",
            "udp": "",
            "iana": "Unofficial",
            "desciption": "Default for BMC Software Control-M/Server and Control-M/Agent for Agent-to-Server, though often changed during installation"
        }
    ],
    "7006": [
        {
            "tcp": "Yes",
            "udp": "",
            "iana": "Unofficial",
            "desciption": "Default for BMC Software Control-M/Server and Control-M/Agent for Server-to-Agent, though often changed during installation"
        }
    ],
    "7010": [
        {
            "tcp": "Yes",
            "udp": "",
            "iana": "Unofficial",
            "desciption": "Default for Cisco AON AMC (AON Management Console)[241]"
        }
    ],
    "7022": [
        {
            "tcp": "Yes",
            "udp": "",
            "iana": "Unofficial",
            "desciption": "Database mirroring endpoints[242]"
        }
    ],
    "7023": [
        {
            "tcp": "",
            "udp": "Yes",
            "iana": "Official",
            "desciption": "Bryan Wilcutt T2-NMCS Protocol for SatCom Modems"
        }
    ],
    "7025": [
        {
            "tcp": "Yes",
            "udp": "",
            "iana": "Unofficial",
            "desciption": "Zimbra LMTP [mailbox]—local mail delivery"
        }
    ],
    "7047": [
        {
            "tcp": "Yes",
            "udp": "",
            "iana": "Unofficial",
            "desciption": "Zimbra conversion server"
        }
    ],
    "7070": [
        {
            "tcp": "Yes",
            "udp": "Yes/No",
            "iana": "Unofficial",
            "desciption": "Real Time Streaming Protocol (RTSP), used by QuickTime Streaming Server. TCP is used by default, UDP is used as an alternate.[10]"
        }
    ],
    "7133": [
        {
            "tcp": "Yes",
            "udp": "",
            "iana": "Unofficial",
            "desciption": "Enemy Territory: Quake Wars"
        }
    ],
    "7144": [
        {
            "tcp": "Yes",
            "udp": "",
            "iana": "Unofficial",
            "desciption": "Peercast[citation needed]"
        }
    ],
    "7145": [
        {
            "tcp": "Yes",
            "udp": "",
            "iana": "Unofficial",
            "desciption": "Peercast[citation needed]"
        }
    ],
    "7171": [
        {
            "tcp": "Yes",
            "udp": "",
            "iana": "Unofficial",
            "desciption": "Tibia"
        }
    ],
    "7262": [
        {
            "tcp": "Yes",
            "udp": "Yes",
            "iana": "Official",
            "desciption": "CNAP (Calypso Network Access Protocol)"
        }
    ],
    "7272": [
        {
            "tcp": "Yes",
            "udp": "Yes",
            "iana": "Official",
            "desciption": "WatchMe - WatchMe Monitoring"
        }
    ],
    "7306": [
        {
            "tcp": "Yes",
            "udp": "",
            "iana": "Unofficial",
            "desciption": "Zimbra mysql [mailbox][citation needed]"
        }
    ],
    "7307": [
        {
            "tcp": "Yes",
            "udp": "",
            "iana": "Unofficial",
            "desciption": "Zimbra mysql [logger][citation needed]"
        }
    ],
    "7312": [
        {
            "tcp": "",
            "udp": "Yes",
            "iana": "Unofficial",
            "desciption": "Sibelius License Server"
        }
    ],
    "7396": [
        {
            "tcp": "Yes",
            "udp": "",
            "iana": "Unofficial",
            "desciption": "Web control interface for Folding@home v7.3.6 and later[243]"
        }
    ],
    "7400": [
        {
            "tcp": "Yes",
            "udp": "Yes",
            "iana": "Official",
            "desciption": "RTPS (Real Time Publish Subscribe) DDS Discovery"
        }
    ],
    "7401": [
        {
            "tcp": "Yes",
            "udp": "Yes",
            "iana": "Official",
            "desciption": "RTPS (Real Time Publish Subscribe) DDS User-Traffic"
        }
    ],
    "7402": [
        {
            "tcp": "Yes",
            "udp": "Yes",
            "iana": "Official",
            "desciption": "RTPS (Real Time Publish Subscribe) DDS Meta-Traffic"
        }
    ],
    "7471": [
        {
            "tcp": "Yes",
            "udp": "",
            "iana": "Unofficial",
            "desciption": "Stateless Transport Tunneling (STT)"
        }
    ],
    "7473": [
        {
            "tcp": "Yes",
            "udp": "",
            "iana": "Official",
            "desciption": "Rise: The Vieneo Province"
        }
    ],
    "7474": [
        {
            "tcp": "Yes",
            "udp": "",
            "iana": "Official",
            "desciption": "Neo4J Server webadmin[244]"
        }
    ],
    "7478": [
        {
            "tcp": "Yes",
            "udp": "",
            "iana": "Official",
            "desciption": "Default port used by Open iT Server.[245]"
        }
    ],
    "7542": [
        {
            "tcp": "Yes",
            "udp": "Yes",
            "iana": "Official",
            "desciption": "Saratoga file transfer protocol[246][247]"
        }
    ],
    "7547": [
        {
            "tcp": "Yes",
            "udp": "Yes",
            "iana": "Official",
            "desciption": "CPE WAN Management Protocol (CWMP) Technical Report 069"
        }
    ],
    "7575": [
        {
            "tcp": "",
            "udp": "Yes",
            "iana": "Unofficial",
            "desciption": "Populous: The Beginning server"
        }
    ],
    "7624": [
        {
            "tcp": "Yes",
            "udp": "Yes",
            "iana": "Official",
            "desciption": "Instrument Neutral Distributed Interface"
        }
    ],
    "7631": [
        {
            "tcp": "Yes",
            "udp": "",
            "iana": "Official",
            "desciption": "ERLPhase"
        }
    ],
    "7634": [
        {
            "tcp": "Yes",
            "udp": "",
            "iana": "Unofficial",
            "desciption": "hddtemp—Utility to monitor hard drive temperature"
        }
    ],
    "7655": [
        {
            "tcp": "",
            "udp": "Yes",
            "iana": "Unofficial",
            "desciption": "I2P SAM Bridge Socket API"
        }
    ],
    "7670": [
        {
            "tcp": "Yes",
            "udp": "",
            "iana": "Unofficial",
            "desciption": "BrettspielWelt BSW Boardgame Portal"
        }
    ],
    "7680": [
        {
            "tcp": "Yes",
            "udp": "",
            "iana": "Unofficial",
            "desciption": "Delivery Optimization for Windows 10[248]"
        }
    ],
    "7687": [
        {
            "tcp": "Yes",
            "udp": "",
            "iana": "Official",
            "desciption": "Bolt database connection"
        }
    ],
    "7717": [
        {
            "tcp": "",
            "udp": "Yes",
            "iana": "Unofficial",
            "desciption": "Killing Floor"
        }
    ],
    "7777": [
        {
            "tcp": "Yes",
            "udp": "",
            "iana": "Unofficial",
            "desciption": "iChat server file transfer proxy[10]"
        },
        {
            "tcp": "Yes",
            "udp": "",
            "iana": "Unofficial",
            "desciption": "Oracle Cluster File System 2[citation needed]"
        }
    ],
    "7831": [
        {
            "tcp": "Yes",
            "udp": "",
            "iana": "Unofficial",
            "desciption": "Default used by Smartlaunch Internet Cafe Administration[249] software"
        }
    ],
    "7880": [
        {
            "tcp": "Yes",
            "udp": "Yes",
            "iana": "Unofficial",
            "desciption": "PowerSchool Gradebook Server[citation needed]"
        }
    ],
    "7890": [
        {
            "tcp": "Yes",
            "udp": "",
            "iana": "Unofficial",
            "desciption": "Default that will be used by the iControl Internet Cafe Suite Administration software"
        }
    ],
    "7915": [
        {
            "tcp": "Yes",
            "udp": "",
            "iana": "Unofficial",
            "desciption": "Default for YSFlight server[250]"
        }
    ],
    "7935": [
        {
            "tcp": "Yes",
            "udp": "",
            "iana": "Unofficial",
            "desciption": "Fixed port used for Adobe Flash Debug Player to communicate with a debugger (Flash IDE, Flex Builder or fdb).[251]"
        }
    ],
    "7946": [
        {
            "tcp": "Yes",
            "udp": "Yes",
            "iana": "Unofficial",
            "desciption": "Docker Swarm communication among nodes[156]"
        }
    ],
    "7990": [
        {
            "tcp": "Yes",
            "udp": "",
            "iana": "Unofficial",
            "desciption": "Atlassian Bitbucket (default port)[citation needed]"
        }
    ],
    "8000": [
        {
            "tcp": "Yes",
            "udp": "",
            "iana": "Unofficial",
            "desciption": "Commonly used for Internet radio streams such as SHOUTcast[citation needed], Icecast[citation needed] and iTunes Radio[10]"
        },
        {
            "tcp": "?",
            "udp": "?",
            "iana": "Unofficial",
            "desciption": "DynamoDB Local[252][self-published source?]"
        }
    ],
    "8005": [
        {
            "tcp": "Yes",
            "udp": "",
            "iana": "Unofficial",
            "desciption": "Tomcat remote shutdown[10]"
        }
    ],
    "8006": [
        {
            "tcp": "Yes",
            "udp": "",
            "iana": "Unofficial",
            "desciption": "Quest AppAssure 5 API[254]"
        },
        {
            "tcp": "Yes",
            "udp": "No",
            "iana": "Unofficial",
            "desciption": "Proxmox Virtual Environment admin web interface[255]"
        }
    ],
    "8007": [
        {
            "tcp": "Yes",
            "udp": "",
            "iana": "Unofficial",
            "desciption": "Quest AppAssure 5 Engine[254]"
        }
    ],
    "8008": [
        {
            "tcp": "Yes",
            "udp": "Yes",
            "iana": "Official",
            "desciption": "Alternative port for HTTP. See also ports 80 and 8080."
        },
        {
            "tcp": "Yes",
            "udp": "",
            "iana": "Unofficial",
            "desciption": "IBM HTTP Server administration default[importance?]"
        }
    ],
    "8009": [
        {
            "tcp": "Yes",
            "udp": "",
            "iana": "Unofficial",
            "desciption": "Apache JServ Protocol (ajp13)[citation needed]"
        }
    ],
    "8010": [
        {
            "tcp": "Yes",
            "udp": "?",
            "iana": "Unofficial",
            "desciption": "Buildbot Web status page[citation needed]"
        }
    ],
    "8042": [
        {
            "tcp": "?",
            "udp": "?",
            "iana": "Unofficial",
            "desciption": "Orthanc – REST API over HTTP[189][self-published source?]"
        }
    ],
    "8069": [
        {
            "tcp": "Yes",
            "udp": "",
            "iana": "Unofficial",
            "desciption": "OpenERP 5.0 XML-RPC protocol[257][self-published source?]"
        }
    ],
    "8070": [
        {
            "tcp": "Yes",
            "udp": "",
            "iana": "Unofficial",
            "desciption": "OpenERP 5.0 NET-RPC protocol[257]"
        }
    ],
    "8074": [
        {
            "tcp": "Yes",
            "udp": "Yes",
            "iana": "Official",
            "desciption": "Gadu-Gadu"
        }
    ],
    "8075": [
        {
            "tcp": "Yes",
            "udp": "",
            "iana": "Unofficial",
            "desciption": "Killing Floor web administration interface[citation needed]"
        }
    ],
    "8080": [
        {
            "tcp": "Yes",
            "udp": "Yes",
            "iana": "Official",
            "desciption": "Alternative port for HTTP. See also ports 80 and 8008."
        },
        {
            "tcp": "Yes",
            "udp": "",
            "iana": "Unofficial",
            "desciption": "Apache Tomcat[258]"
        }
    ],
    "8088": [
        {
            "tcp": "Yes",
            "udp": "",
            "iana": "Unofficial",
            "desciption": "Asterisk management access via HTTP[citation needed]"
        }
    ],
    "8089": [
        {
            "tcp": "Yes",
            "udp": "No",
            "iana": "Unofficial",
            "desciption": "Splunk daemon management[260][self-published source]"
        },
        {
            "tcp": "Yes",
            "udp": "",
            "iana": "Unofficial",
            "desciption": "Fritz!Box automatic TR-069 configuration[261]"
        }
    ],
    "8090": [
        {
            "tcp": "?",
            "udp": "?",
            "iana": "Unofficial",
            "desciption": "Atlassian Confluence[262][self-published source?]"
        },
        {
            "tcp": "Yes",
            "udp": "",
            "iana": "Unofficial",
            "desciption": "Coral Content Distribution Network (legacy; 80 and 8080 now supported)[263]"
        }
    ],
    "8091": [
        {
            "tcp": "?",
            "udp": "?",
            "iana": "Unofficial",
            "desciption": "CouchBase web administration[264]"
        }
    ],
    "8092": [
        {
            "tcp": "?",
            "udp": "?",
            "iana": "Unofficial",
            "desciption": "CouchBase API[264]"
        }
    ],
    "8111": [
        {
            "tcp": "Yes",
            "udp": "",
            "iana": "Unofficial",
            "desciption": "JOSM Remote Control"
        }
    ],
    "8112": [
        {
            "tcp": "Yes",
            "udp": "",
            "iana": "Unofficial",
            "desciption": "PAC Pacifica Coin"
        }
    ],
    "8116": [
        {
            "tcp": "",
            "udp": "Yes",
            "iana": "Unofficial",
            "desciption": "Check Point Cluster Control Protocol"
        }
    ],
    "8118": [
        {
            "tcp": "Yes",
            "udp": "",
            "iana": "Official",
            "desciption": "Privoxy—advertisement-filtering Web proxy"
        }
    ],
    "8123": [
        {
            "tcp": "Yes",
            "udp": "",
            "iana": "Official",
            "desciption": "Polipo Web proxy"
        },
        {
            "tcp": "Yes",
            "udp": "",
            "iana": "Unofficial",
            "desciption": "BURST Reference Software P2P"
        }
    ],
    "8124": [
        {
            "tcp": "Yes",
            "udp": "",
            "iana": "Unofficial",
            "desciption": "Standard BURST Mining Pool Software Port"
        }
    ],
    "8125": [
        {
            "tcp": "Yes",
            "udp": "",
            "iana": "Unofficial",
            "desciption": "BURST Reference Software Web Interface"
        }
    ],
    "8139": [
        {
            "tcp": "Yes",
            "udp": "",
            "iana": "Unofficial",
            "desciption": "Puppet (software) Client agent"
        }
    ],
    "8140": [
        {
            "tcp": "Yes",
            "udp": "",
            "iana": "Official",
            "desciption": "Puppet (software) Master server"
        }
    ],
    "8172": [
        {
            "tcp": "Yes",
            "udp": "",
            "iana": "Unofficial",
            "desciption": "Microsoft Remote Administration for IIS Manager[265]"
        }
    ],
    "8184": [
        {
            "tcp": "Yes",
            "udp": "",
            "iana": "Unofficial",
            "desciption": "NCSA Brown Dog Data Access Proxy"
        }
    ],
    "8200": [
        {
            "tcp": "Yes",
            "udp": "",
            "iana": "Unofficial",
            "desciption": "GoToMyPC"
        },
        {
            "tcp": "Yes",
            "udp": "",
            "iana": "Unofficial",
            "desciption": "MiniDLNA media server Web Interface"
        }
    ],
    "8222": [
        {
            "tcp": "?",
            "udp": "?",
            "iana": "Unofficial",
            "desciption": "VMware VI Web Access via HTTP[267]"
        }
    ],
    "8243": [
        {
            "tcp": "Yes",
            "udp": "Yes",
            "iana": "Official",
            "desciption": "HTTPS listener for Apache Synapse[268]"
        }
    ],
    "8245": [
        {
            "tcp": "Yes",
            "udp": "",
            "iana": "Unofficial",
            "desciption": "Dynamic DNS for at least No-IP and DynDNS[269]"
        }
    ],
    "8280": [
        {
            "tcp": "Yes",
            "udp": "Yes",
            "iana": "Official",
            "desciption": "HTTP listener for Apache Synapse[268]"
        }
    ],
    "8281": [
        {
            "tcp": "Yes",
            "udp": "",
            "iana": "Unofficial",
            "desciption": "HTTP Listener for Gatecraft Plugin"
        }
    ],
    "8291": [
        {
            "tcp": "Yes",
            "udp": "",
            "iana": "Unofficial",
            "desciption": "Winbox—Default on a MikroTik RouterOS for a Windows application used to administer MikroTik RouterOS[270]"
        }
    ],
    "8303": [
        {
            "tcp": "",
            "udp": "Yes",
            "iana": "Unofficial",
            "desciption": "Teeworlds Server"
        }
    ],
    "8332": [
        {
            "tcp": "Yes",
            "udp": "",
            "iana": "Unofficial",
            "desciption": "Bitcoin JSON-RPC server[271]"
        }
    ],
    "8333": [
        {
            "tcp": "Yes",
            "udp": "",
            "iana": "Unofficial",
            "desciption": "Bitcoin[272]"
        },
        {
            "tcp": "?",
            "udp": "?",
            "iana": "Unofficial",
            "desciption": "VMware VI Web Access via HTTPS[267]"
        }
    ],
    "8337": [
        {
            "tcp": "Yes",
            "udp": "",
            "iana": "Unofficial",
            "desciption": "VisualSVN Distributed File System Service (VDFS)[273]"
        }
    ],
    "8384": [
        {
            "tcp": "Yes",
            "udp": "",
            "iana": "Unofficial",
            "desciption": "Syncthing web GUI"
        }
    ],
    "8388": [
        {
            "tcp": "Yes",
            "udp": "",
            "iana": "Unofficial",
            "desciption": "Shadowsocks proxy server[citation needed]"
        }
    ],
    "8443": [
        {
            "tcp": "Yes",
            "udp": "",
            "iana": "Unofficial",
            "desciption": "SW Soft Plesk Control Panel"
        },
        {
            "tcp": "Yes",
            "udp": "",
            "iana": "Unofficial",
            "desciption": "Apache Tomcat SSL"
        }
    ],
    "8444": [
        {
            "tcp": "Yes",
            "udp": "",
            "iana": "Unofficial",
            "desciption": "Bitmessage"
        }
    ],
    "8448": [
        {
            "tcp": "Yes",
            "udp": "?",
            "iana": "Unofficial",
            "desciption": "Matrix homeserver federation over HTTPS[256]"
        }
    ],
    "8484": [
        {
            "tcp": "Yes",
            "udp": "",
            "iana": "Unofficial",
            "desciption": "MapleStory Login Server"
        }
    ],
    "8500": [
        {
            "tcp": "Yes",
            "udp": "",
            "iana": "Unofficial",
            "desciption": "Adobe ColdFusion built-in web server[274][self-published source?]"
        }
    ],
    "8530": [
        {
            "tcp": "?",
            "udp": "?",
            "iana": "Unofficial",
            "desciption": "Windows Server Update Services over HTTP, when using the default role installation settings in Windows Server 2012 and later versions.[275][276]"
        }
    ],
    "8531": [
        {
            "tcp": "?",
            "udp": "?",
            "iana": "Unofficial",
            "desciption": "Windows Server Update Services over HTTPS, when using the default role installation settings in Windows Server 2012 and later versions.[275][276]"
        }
    ],
    "8580": [
        {
            "tcp": "?",
            "udp": "?",
            "iana": "Unofficial",
            "desciption": "Freegate, an Internet anonymizer and proxy tool[277]"
        }
    ],
    "8629": [
        {
            "tcp": "Yes",
            "udp": "",
            "iana": "Unofficial",
            "desciption": "Tibero database[citation needed]"
        }
    ],
    "8642": [
        {
            "tcp": "Yes",
            "udp": "",
            "iana": "Unofficial",
            "desciption": "Lotus Notes Traveler auto synchronization for Windows Mobile and Nokia devices[278]"
        }
    ],
    "8691": [
        {
            "tcp": "Yes",
            "udp": "",
            "iana": "Unofficial",
            "desciption": "Ultra Fractal, a fractal generation and rendering software application – distributed calculations over networked computers[279][280][self-published source?]"
        }
    ],
    "8765": [
        {
            "tcp": "Yes",
            "udp": "?",
            "iana": "Unofficial",
            "desciption": "Default port of a local GUN relay peer that the Internet Archive[281][self-published source] and others use as a decentralized mirror for censorship resistance.[282][self-published source]"
        }
    ],
    "8767": [
        {
            "tcp": "",
            "udp": "Yes",
            "iana": "Unofficial",
            "desciption": "Voice channel of TeamSpeak 2,[283] a proprietary Voice over IP protocol targeted at gamers[citation needed]"
        }
    ],
    "8834": [
        {
            "tcp": "?",
            "udp": "?",
            "iana": "Unofficial",
            "desciption": "Nessus, a vulnerability scanner – remote XML-RPC web server[284][third-party source needed]"
        }
    ],
    "8840": [
        {
            "tcp": "?",
            "udp": "?",
            "iana": "Unofficial",
            "desciption": "Opera Unite, an extensible framework for web applications[285][286]"
        }
    ],
    "8880": [
        {
            "tcp": "Yes",
            "udp": "",
            "iana": "Official",
            "desciption": "Alternate port of CDDB (Compact Disc Database) protocol, used to look up audio CD (compact disc) information over the Internet.[287] See also port 888."
        },
        {
            "tcp": "?",
            "udp": "?",
            "iana": "Unofficial",
            "desciption": "IBM WebSphere Application Server SOAP connector[288][jargon]"
        }
    ],
    "8883": [
        {
            "tcp": "Yes",
            "udp": "Yes",
            "iana": "Official",
            "desciption": "Secure MQTT (MQTT over TLS)[289][290]"
        }
    ],
    "8887": [
        {
            "tcp": "?",
            "udp": "?",
            "iana": "Unofficial",
            "desciption": "HyperVM over HTTP[citation needed]"
        }
    ],
    "8888": [
        {
            "tcp": "?",
            "udp": "?",
            "iana": "Unofficial",
            "desciption": "HyperVM over HTTPS[citation needed]"
        },
        {
            "tcp": "?",
            "udp": "Yes",
            "iana": "Unofficial",
            "desciption": "Freenet web UI (localhost only)[citation needed]"
        }
    ],
    "8889": [
        {
            "tcp": "?",
            "udp": "?",
            "iana": "Unofficial",
            "desciption": "MAMP[293]"
        }
    ],
    "8983": [
        {
            "tcp": "?",
            "udp": "?",
            "iana": "Unofficial",
            "desciption": "Apache Solr[294]"
        }
    ],
    "8997": [
        {
            "tcp": "?",
            "udp": "?",
            "iana": "Unofficial",
            "desciption": "Alternate port for I2P Monotone Proxy[167][jargon]"
        }
    ],
    "8998": [
        {
            "tcp": "?",
            "udp": "?",
            "iana": "Unofficial",
            "desciption": "I2P Monotone Proxy[167][jargon]"
        }
    ],
    "8999": [
        {
            "tcp": "?",
            "udp": "?",
            "iana": "Unofficial",
            "desciption": "Alternate port for I2P Monotone Proxy[167][jargon]"
        }
    ],
    "9000": [
        {
            "tcp": "Yes",
            "udp": "",
            "iana": "Unofficial",
            "desciption": "SonarQube Web Server[295]"
        },
        {
            "tcp": "Yes",
            "udp": "",
            "iana": "Unofficial",
            "desciption": "DBGp"
        }
    ],
    "9001": [
        {
            "tcp": "Yes",
            "udp": "Yes",
            "iana": "Official",
            "desciption": "ETL Service Manager[298]"
        },
        {
            "tcp": "",
            "udp": "",
            "iana": "Unofficial",
            "desciption": "Microsoft SharePoint authoring environment"
        }
    ],
    "9002": [
        {
            "tcp": "",
            "udp": "",
            "iana": "Unofficial",
            "desciption": "Newforma Server comms"
        }
    ],
    "9006": [
        {
            "tcp": "",
            "udp": "",
            "iana": "Official",
            "desciption": "De-Commissioned Port"
        },
        {
            "tcp": "Yes",
            "udp": "",
            "iana": "Unofficial",
            "desciption": "Tomcat in standalone mode[10]"
        }
    ],
    "9030": [
        {
            "tcp": "Yes",
            "udp": "",
            "iana": "Unofficial",
            "desciption": "Tor often used"
        }
    ],
    "9042": [
        {
            "tcp": "Yes",
            "udp": "",
            "iana": "Unofficial",
            "desciption": "Apache Cassandra native protocol clients"
        }
    ],
    "9043": [
        {
            "tcp": "Yes",
            "udp": "",
            "iana": "Unofficial",
            "desciption": "WebSphere Application Server Administration Console secure"
        }
    ],
    "9060": [
        {
            "tcp": "Yes",
            "udp": "",
            "iana": "Unofficial",
            "desciption": "WebSphere Application Server Administration Console"
        }
    ],
    "9080": [
        {
            "tcp": "Yes",
            "udp": "Yes",
            "iana": "Official",
            "desciption": "glrpc, Groove Collaboration software GLRPC"
        },
        {
            "tcp": "Yes",
            "udp": "",
            "iana": "Unofficial",
            "desciption": "WebSphere Application Server HTTP Transport (port 1) default"
        }
    ],
    "9090": [
        {
            "tcp": "Yes",
            "udp": "",
            "iana": "Unofficial",
            "desciption": "Prometheus metrics server"
        },
        {
            "tcp": "Yes",
            "udp": "",
            "iana": "Unofficial",
            "desciption": "Openfire Administration Console"
        }
    ],
    "9091": [
        {
            "tcp": "Yes",
            "udp": "",
            "iana": "Unofficial",
            "desciption": "Openfire Administration Console (SSL Secured)"
        },
        {
            "tcp": "Yes",
            "udp": "",
            "iana": "Unofficial",
            "desciption": "Transmission (BitTorrent client) Web Interface"
        }
    ],
    "9092": [
        {
            "tcp": "Yes",
            "udp": "",
            "iana": "Unofficial",
            "desciption": "H2 (DBMS) Database Server"
        },
        {
            "tcp": "Yes",
            "udp": "",
            "iana": "Unofficial",
            "desciption": "Apache Kafka A Distributed Streaming Platform[299]"
        }
    ],
    "9100": [
        {
            "tcp": "Yes",
            "udp": "Assigned",
            "iana": "Official",
            "desciption": "PDL Data Stream, used for printing to certain network printers[10]"
        }
    ],
    "9101": [
        {
            "tcp": "Yes",
            "udp": "Yes",
            "iana": "Official",
            "desciption": "Bacula Director"
        }
    ],
    "9102": [
        {
            "tcp": "Yes",
            "udp": "Yes",
            "iana": "Official",
            "desciption": "Bacula File Daemon"
        }
    ],
    "9103": [
        {
            "tcp": "Yes",
            "udp": "Yes",
            "iana": "Official",
            "desciption": "Bacula Storage Daemon"
        }
    ],
    "9119": [
        {
            "tcp": "Yes",
            "udp": "Yes",
            "iana": "Official",
            "desciption": "MXit Instant Messenger"
        }
    ],
    "9150": [
        {
            "tcp": "Yes",
            "udp": "",
            "iana": "Unofficial",
            "desciption": "Tor Browser"
        }
    ],
    "9191": [
        {
            "tcp": "Yes",
            "udp": "",
            "iana": "Unofficial",
            "desciption": "Sierra Wireless Airlink"
        }
    ],
    "9199": [
        {
            "tcp": "Yes",
            "udp": "",
            "iana": "Unofficial",
            "desciption": "Avtex LLC—qStats"
        }
    ],
    "9200": [
        {
            "tcp": "Yes",
            "udp": "",
            "iana": "Unofficial",
            "desciption": "Elasticsearch[300]—default Elasticsearch port"
        }
    ],
    "9217": [
        {
            "tcp": "Yes",
            "udp": "",
            "iana": "Unofficial",
            "desciption": "iPass Platform Service"
        }
    ],
    "9293": [
        {
            "tcp": "Yes",
            "udp": "",
            "iana": "Unofficial",
            "desciption": "Sony PlayStation RemotePlay[301]"
        }
    ],
    "9300": [
        {
            "tcp": "Yes",
            "udp": "",
            "iana": "Unofficial",
            "desciption": "IBM Cognos BI[citation needed]"
        }
    ],
    "9303": [
        {
            "tcp": "",
            "udp": "Yes",
            "iana": "Unofficial",
            "desciption": "D-Link Shareport Share storage and MFP printers[citation needed]"
        }
    ],
    "9306": [
        {
            "tcp": "Yes",
            "udp": "",
            "iana": "Official",
            "desciption": "Sphinx Native API"
        }
    ],
    "9309": [
        {
            "tcp": "Yes",
            "udp": "Yes",
            "iana": "Unofficial",
            "desciption": "Sony PlayStation Vita Host Collaboration WiFi Data Transfer[302]"
        }
    ],
    "9312": [
        {
            "tcp": "Yes",
            "udp": "",
            "iana": "Official",
            "desciption": "Sphinx SphinxQL"
        }
    ],
    "9332": [
        {
            "tcp": "Yes",
            "udp": "",
            "iana": "Unofficial",
            "desciption": "Litecoin JSON-RPC server"
        }
    ],
    "9333": [
        {
            "tcp": "Yes",
            "udp": "",
            "iana": "Unofficial",
            "desciption": "Litecoin"
        }
    ],
    "9339": [
        {
            "tcp": "Yes",
            "udp": "",
            "iana": "Unofficial",
            "desciption": "Used by all Supercell games such as Brawl Stars and Clash of Clans, mobile freemium strategy video games"
        }
    ],
    "9389": [
        {
            "tcp": "Yes",
            "udp": "Yes",
            "iana": "Official",
            "desciption": "adws, Microsoft AD DS Web Services, Powershell uses this port"
        }
    ],
    "9392": [
        {
            "tcp": "Yes",
            "udp": "?",
            "iana": "Unofficial",
            "desciption": "OpenVAS Greenbone Security Assistant web interface"
        }
    ],
    "9418": [
        {
            "tcp": "Yes",
            "udp": "Yes",
            "iana": "Official",
            "desciption": "git, Git pack transfer service"
        }
    ],
    "9419": [
        {
            "tcp": "Yes",
            "udp": "",
            "iana": "Unofficial",
            "desciption": "MooseFS distributed file system – master control port[303][self-published source]"
        }
    ],
    "9420": [
        {
            "tcp": "Yes",
            "udp": "",
            "iana": "Unofficial",
            "desciption": "MooseFS distributed file system – master command port[303]"
        }
    ],
    "9421": [
        {
            "tcp": "Yes",
            "udp": "",
            "iana": "Unofficial",
            "desciption": "MooseFS distributed file system – master client port[303]"
        }
    ],
    "9422": [
        {
            "tcp": "Yes",
            "udp": "",
            "iana": "Unofficial",
            "desciption": "MooseFS distributed file system – Chunkservers[303]"
        }
    ],
    "9425": [
        {
            "tcp": "Yes",
            "udp": "",
            "iana": "Unofficial",
            "desciption": "MooseFS distributed file system – CGI server[303]"
        }
    ],
    "9443": [
        {
            "tcp": "Yes",
            "udp": "",
            "iana": "Unofficial",
            "desciption": "VMware Websense Triton console (HTTPS port used for accessing and administrating a vCenter Server via the Web Management Interface)"
        },
        {
            "tcp": "Yes",
            "udp": "",
            "iana": "Unofficial",
            "desciption": "NCSA Brown Dog Data Tilling Service"
        }
    ],
    "9535": [
        {
            "tcp": "Yes",
            "udp": "Yes",
            "iana": "Official",
            "desciption": "mngsuite, LANDesk Management Suite Remote Control"
        }
    ],
    "9536": [
        {
            "tcp": "Yes",
            "udp": "Yes",
            "iana": "Official",
            "desciption": "laes-bf, IP Fabrics Surveillance buffering function"
        }
    ],
    "9600": [
        {
            "tcp": "No",
            "udp": "Yes",
            "iana": "Unofficial",
            "desciption": "Factory Interface Network Service (FINS), a network protocol used by Omron programmable logic controllers[citation needed]"
        }
    ],
    "9669": [
        {
            "tcp": "Yes",
            "udp": "No",
            "iana": "Unofficial",
            "desciption": "VGG Image Search Engine VISE"
        }
    ],
    "9675": [
        {
            "tcp": "Yes",
            "udp": "Yes",
            "iana": "Unofficial",
            "desciption": "Spiceworks Desktop, IT Helpdesk Software"
        }
    ],
    "9676": [
        {
            "tcp": "Yes",
            "udp": "Yes",
            "iana": "Unofficial",
            "desciption": "Spiceworks Desktop, IT Helpdesk Software"
        }
    ],
    "9695": [
        {
            "tcp": "?",
            "udp": "?",
            "iana": "Official",
            "desciption": "Content centric networking (CCN, CCNx)[citation needed]"
        }
    ],
    "9785": [
        {
            "tcp": "Yes",
            "udp": "Yes",
            "iana": "Unofficial",
            "desciption": "Viber[191]"
        }
    ],
    "9800": [
        {
            "tcp": "Yes",
            "udp": "Yes",
            "iana": "Official",
            "desciption": "WebDAV Source"
        },
        {
            "tcp": "",
            "udp": "",
            "iana": "Unofficial",
            "desciption": "WebCT e-learning portal"
        }
    ],
    "9875": [
        {
            "tcp": "Yes",
            "udp": "",
            "iana": "Unofficial",
            "desciption": "Club Penguin Disney online game for kids"
        }
    ],
    "9898": [
        {
            "tcp": "Yes",
            "udp": "",
            "iana": "Unofficial",
            "desciption": "Tripwire—File Integrity Monitoring Software[304]"
        }
    ],
    "9899": [
        {
            "tcp": "",
            "udp": "Yes",
            "iana": "Official",
            "desciption": "SCTP tunneling (port number used in SCTP packets encapsulated in UDP, RFC 6951)"
        }
    ],
    "9901": [
        {
            "tcp": "Yes",
            "udp": "",
            "iana": "Unofficial",
            "desciption": "Banana for Apache Solr"
        }
    ],
    "9981": [
        {
            "tcp": "Yes",
            "udp": "",
            "iana": "Unofficial",
            "desciption": "Tvheadend HTTP server (web interface)[305]"
        }
    ],
    "9982": [
        {
            "tcp": "Yes",
            "udp": "",
            "iana": "Unofficial",
            "desciption": "Tvheadend HTSP server (Streaming protocol)[305]"
        }
    ],
    "9987": [
        {
            "tcp": "",
            "udp": "Yes",
            "iana": "Unofficial",
            "desciption": "TeamSpeak 3 server default (voice) port (for the conflicting service see the IANA list)"
        }
    ],
    "9993": [
        {
            "tcp": "",
            "udp": "Yes",
            "iana": "Unofficial",
            "desciption": "ZeroTier Default port for ZeroTier"
        }
    ],
    "9997": [
        {
            "tcp": "Yes",
            "udp": "",
            "iana": "Unofficial",
            "desciption": "Splunk port for communication between the forwarders and indexers"
        }
    ],
    "9999": [
        {
            "tcp": "",
            "udp": "",
            "iana": "Unofficial",
            "desciption": "Urchin Web Analytics[citation needed]"
        }
    ],
    "10000": [
        {
            "tcp": "Yes",
            "udp": "Yes",
            "iana": "Official",
            "desciption": "Network Data Management Protocol"
        },
        {
            "tcp": "",
            "udp": "",
            "iana": "Unofficial",
            "desciption": "BackupExec"
        }
    ],
    "10001": [
        {
            "tcp": "",
            "udp": "Yes",
            "iana": "Unofficial",
            "desciption": "Ubiquiti UniFi access points broadcast to 255.255.255.255:10001 (UDP) to locate the controller(s)"
        }
    ],
    "10009": [
        {
            "tcp": "Yes",
            "udp": "Yes",
            "iana": "Unofficial",
            "desciption": "CrossFire, a multiplayer online First Person Shooter[citation needed]"
        }
    ],
    "10011": [
        {
            "tcp": "?",
            "udp": "?",
            "iana": "Unofficial",
            "desciption": "Teamspeak3 Chat Server[307]"
        }
    ],
    "10024": [
        {
            "tcp": "Yes",
            "udp": "",
            "iana": "Unofficial",
            "desciption": "Zimbra smtp [mta]—to amavis from postfix[citation needed]"
        }
    ],
    "10025": [
        {
            "tcp": "Yes",
            "udp": "",
            "iana": "Unofficial",
            "desciption": "Zimbra smtp [mta]—back to postfix from amavis[citation needed]"
        }
    ],
    "10042": [
        {
            "tcp": "Yes",
            "udp": "",
            "iana": "Unofficial",
            "desciption": "Mathoid server[citation needed]"
        }
    ],
    "10050": [
        {
            "tcp": "Yes",
            "udp": "Yes",
            "iana": "Official",
            "desciption": "Zabbix agent"
        }
    ],
    "10051": [
        {
            "tcp": "Yes",
            "udp": "Yes",
            "iana": "Official",
            "desciption": "Zabbix trapper"
        }
    ],
    "10110": [
        {
            "tcp": "Yes",
            "udp": "Yes",
            "iana": "Official",
            "desciption": "NMEA 0183 Navigational Data. Transport of NMEA 0183 sentences over TCP or UDP"
        }
    ],
    "10172": [
        {
            "tcp": "Yes",
            "udp": "",
            "iana": "Unofficial",
            "desciption": "Intuit Quickbooks client"
        }
    ],
    "10200": [
        {
            "tcp": "Yes",
            "udp": "",
            "iana": "Unofficial",
            "desciption": "FRISK Software International's fpscand virus scanning daemon for Unix platforms[308]"
        },
        {
            "tcp": "Yes",
            "udp": "",
            "iana": "Unofficial",
            "desciption": "FRISK Software International's f-protd virus scanning daemon for Unix platforms[309]"
        }
    ],
    "10212": [
        {
            "tcp": "Yes",
            "udp": "",
            "iana": "Official",
            "desciption": "GE Intelligent Platforms Proficy HMI/SCADA – CIMPLICITY WebView[310]"
        }
    ],
    "10308": [
        {
            "tcp": "?",
            "udp": "?",
            "iana": "Unofficial",
            "desciption": "Lock On: Modern Air Combat[citation needed]"
        }
    ],
    "10480": [
        {
            "tcp": "?",
            "udp": "?",
            "iana": "Unofficial",
            "desciption": "SWAT 4 Dedicated Server[citation needed]"
        }
    ],
    "10505": [
        {
            "tcp": "",
            "udp": "Yes",
            "iana": "Unofficial",
            "desciption": "BlueStacks (android simulator) broadcast[311]"
        }
    ],
    "10514": [
        {
            "tcp": "Yes",
            "udp": "Yes",
            "iana": "Unofficial",
            "desciption": "TLS-enabled Rsyslog (default by convention)"
        }
    ],
    "10800": [
        {
            "tcp": "Yes",
            "udp": "",
            "iana": "Unofficial",
            "desciption": "Touhou fight games (Immaterial and Missing Power, Scarlet Weather Rhapsody, Hisoutensoku, Hopeless Masquerade and Urban Legend in Limbo)"
        }
    ],
    "10823": [
        {
            "tcp": "",
            "udp": "Yes",
            "iana": "Unofficial",
            "desciption": "Farming Simulator 2011[citation needed]"
        }
    ],
    "10891": [
        {
            "tcp": "Yes",
            "udp": "",
            "iana": "Unofficial",
            "desciption": "Jungle Disk (this port is opened by the Jungle Disk Monitor service on the localhost)[citation needed]"
        }
    ],
    "10933": [
        {
            "tcp": "Yes",
            "udp": "No",
            "iana": "Official",
            "desciption": "Octopus Deploy Tentacle deployment agent[312]"
        }
    ],
    "11001": [
        {
            "tcp": "Yes",
            "udp": "Yes",
            "iana": "Official",
            "desciption": "metasys ( Johnson Controls Metasys java AC control environment )"
        }
    ],
    "11100": [
        {
            "tcp": "No",
            "udp": "Yes",
            "iana": "Unofficial",
            "desciption": "Risk of Rain multiplayer server"
        }
    ],
    "11111": [
        {
            "tcp": "Yes",
            "udp": "",
            "iana": "Unofficial",
            "desciption": "RiCcI, Remote Configuration Interface (Redhat Linux)"
        }
    ],
    "11112": [
        {
            "tcp": "Yes",
            "udp": "Yes",
            "iana": "Official",
            "desciption": "ACR/NEMA Digital Imaging and Communications in Medicine (DICOM)"
        }
    ],
    "11211": [
        {
            "tcp": "Yes",
            "udp": "Yes",
            "iana": "Unofficial",
            "desciption": "memcached[10]"
        }
    ],
    "11214": [
        {
            "tcp": "Yes",
            "udp": "Yes",
            "iana": "Unofficial",
            "desciption": "memcached incoming SSL proxy"
        }
    ],
    "11215": [
        {
            "tcp": "Yes",
            "udp": "Yes",
            "iana": "Unofficial",
            "desciption": "memcached internal outgoing SSL proxy"
        }
    ],
    "11235": [
        {
            "tcp": "",
            "udp": "",
            "iana": "Unofficial",
            "desciption": "Savage: Battle for Newerth[citation needed]"
        }
    ],
    "11311": [
        {
            "tcp": "Yes",
            "udp": "Yes",
            "iana": "Unofficial",
            "desciption": "Robot Operating System master"
        }
    ],
    "11371": [
        {
            "tcp": "Yes",
            "udp": "Yes",
            "iana": "Official",
            "desciption": "OpenPGP HTTP key server"
        }
    ],
    "11753": [
        {
            "tcp": "Yes",
            "udp": "",
            "iana": "Unofficial",
            "desciption": "OpenRCT2 multiplayer[313][self-published source]"
        }
    ],
    "12000": [
        {
            "tcp": "Yes",
            "udp": "Yes",
            "iana": "Unofficial",
            "desciption": "CubeForm, Multiplayer SandBox Game"
        }
    ],
    "12012": [
        {
            "tcp": "",
            "udp": "Yes",
            "iana": "Unofficial",
            "desciption": "Audition Online Dance Battle, Korea Server—Status/Version Check"
        }
    ],
    "12013": [
        {
            "tcp": "Yes",
            "udp": "Yes",
            "iana": "Unofficial",
            "desciption": "Audition Online Dance Battle, Korea Server"
        }
    ],
    "12035": [
        {
            "tcp": "",
            "udp": "Yes",
            "iana": "Unofficial",
            "desciption": "Second Life, used for server UDP in-bound[314]"
        }
    ],
    "12043": [
        {
            "tcp": "Yes",
            "udp": "",
            "iana": "Unofficial",
            "desciption": "Second Life, used for LSL HTTPS in-bound[315]"
        }
    ],
    "12046": [
        {
            "tcp": "Yes",
            "udp": "",
            "iana": "Unofficial",
            "desciption": "Second Life, used for LSL HTTP in-bound[315]"
        }
    ],
    "12201": [
        {
            "tcp": "Yes",
            "udp": "Yes",
            "iana": "Unofficial",
            "desciption": "Graylog Extended Log Format (GELF)[316][importance?]"
        }
    ],
    "12222": [
        {
            "tcp": "",
            "udp": "Yes",
            "iana": "Official",
            "desciption": "Light Weight Access Point Protocol (LWAPP) LWAPP data (RFC 5412)"
        }
    ],
    "12223": [
        {
            "tcp": "",
            "udp": "Yes",
            "iana": "Official",
            "desciption": "Light Weight Access Point Protocol (LWAPP) LWAPP control (RFC 5412)"
        }
    ],
    "12307": [
        {
            "tcp": "",
            "udp": "Yes",
            "iana": "Unofficial",
            "desciption": "Makerbot UDP Broadcast (client to printer) (JSON-RPC)[317]"
        }
    ],
    "12308": [
        {
            "tcp": "",
            "udp": "Yes",
            "iana": "Unofficial",
            "desciption": "Makerbot UDP Broadcast (printer to client) (JSON-RPC)[317]"
        }
    ],
    "12345": [
        {
            "tcp": "Yes",
            "udp": "Yes",
            "iana": "Unofficial",
            "desciption": "Cube World[318]"
        },
        {
            "tcp": "Yes",
            "udp": "",
            "iana": "Unofficial",
            "desciption": "Little Fighter 2"
        }
    ],
    "12443": [
        {
            "tcp": "Yes",
            "udp": "",
            "iana": "Unofficial",
            "desciption": "IBM HMC web browser management access over HTTPS instead of default port 443[319]"
        }
    ],
    "12489": [
        {
            "tcp": "Yes",
            "udp": "",
            "iana": "Unofficial",
            "desciption": "NSClient/NSClient++/NC_Net (Nagios)"
        }
    ],
    "12975": [
        {
            "tcp": "Yes",
            "udp": "",
            "iana": "Unofficial",
            "desciption": "LogMeIn Hamachi (VPN tunnel software; also port 32976)—used to connect to Mediation Server (bibi.hamachi.cc); will attempt to use SSL (TCP port 443) if both 12975 & 32976 fail to connect"
        }
    ],
    "13008": [
        {
            "tcp": "Yes",
            "udp": "Yes",
            "iana": "Unofficial",
            "desciption": "CrossFire, a multiplayer online First Person Shooter[citation needed]"
        }
    ],
    "13075": [
        {
            "tcp": "Yes",
            "udp": "",
            "iana": "Official",
            "desciption": "Default[321] for BMC Software Control-M/Enterprise Manager Corba communication, though often changed during installation"
        }
    ],
    "13400": [
        {
            "tcp": "Yes",
            "udp": "Yes",
            "iana": "Official",
            "desciption": "ISO 13400 Road vehicles — Diagnostic communication over Internet Protocol(DoIP)"
        }
    ],
    "13720": [
        {
            "tcp": "Yes",
            "udp": "Yes",
            "iana": "Official",
            "desciption": "Symantec NetBackup—bprd (formerly VERITAS)"
        }
    ],
    "13721": [
        {
            "tcp": "Yes",
            "udp": "Yes",
            "iana": "Official",
            "desciption": "Symantec NetBackup—bpdbm (formerly VERITAS)"
        }
    ],
    "13724": [
        {
            "tcp": "Yes",
            "udp": "Yes",
            "iana": "Official",
            "desciption": "Symantec Network Utility—vnetd (formerly VERITAS)"
        }
    ],
    "13782": [
        {
            "tcp": "Yes",
            "udp": "Yes",
            "iana": "Official",
            "desciption": "Symantec NetBackup—bpcd (formerly VERITAS)"
        }
    ],
    "13783": [
        {
            "tcp": "Yes",
            "udp": "Yes",
            "iana": "Official",
            "desciption": "Symantec VOPIED protocol (formerly VERITAS)"
        }
    ],
    "13785": [
        {
            "tcp": "Yes",
            "udp": "Yes",
            "iana": "Official",
            "desciption": "Symantec NetBackup Database—nbdb (formerly VERITAS)"
        }
    ],
    "13786": [
        {
            "tcp": "Yes",
            "udp": "Yes",
            "iana": "Official",
            "desciption": "Symantec nomdb (formerly VERITAS)"
        }
    ],
    "14550": [
        {
            "tcp": "",
            "udp": "Yes",
            "iana": "Unofficial",
            "desciption": "MAVLink Ground Station Port"
        }
    ],
    "14567": [
        {
            "tcp": "",
            "udp": "Yes",
            "iana": "Unofficial",
            "desciption": "Battlefield 1942 and mods"
        }
    ],
    "14800": [
        {
            "tcp": "Yes",
            "udp": "",
            "iana": "Unofficial",
            "desciption": "Age of Wonders III p2p port[322]"
        }
    ],
    "15000": [
        {
            "tcp": "Yes",
            "udp": "",
            "iana": "Unofficial",
            "desciption": "psyBNC"
        },
        {
            "tcp": "Yes",
            "udp": "",
            "iana": "Unofficial",
            "desciption": "Wesnoth"
        }
    ],
    "15009": [
        {
            "tcp": "Yes",
            "udp": "Yes",
            "iana": "Unofficial",
            "desciption": "Teltonika networks remote management system (RMS)"
        }
    ],
    "15010": [
        {
            "tcp": "Yes",
            "udp": "Yes",
            "iana": "Unofficial",
            "desciption": "Teltonika networks remote management system (RMS)"
        }
    ],
    "15345": [
        {
            "tcp": "Yes",
            "udp": "Yes",
            "iana": "Official",
            "desciption": "XPilot Contact"
        }
    ],
    "15441": [
        {
            "tcp": "?",
            "udp": "?",
            "iana": "Unofficial",
            "desciption": "ZeroNet fileserver[citation needed]"
        }
    ],
    "15567": [
        {
            "tcp": "",
            "udp": "Yes",
            "iana": "Unofficial",
            "desciption": "Battlefield Vietnam and mods"
        }
    ],
    "15672": [
        {
            "tcp": "Yes",
            "udp": "No",
            "iana": "Unofficial",
            "desciption": "RabbitMQ management plugin[323][self-published source]"
        }
    ],
    "16000": [
        {
            "tcp": "Yes",
            "udp": "",
            "iana": "Unofficial",
            "desciption": "Oracle WebCenter Content: Imaging (formerly known as Oracle Universal Content Management). Port though often changed during installation"
        },
        {
            "tcp": "Yes",
            "udp": "",
            "iana": "Unofficial",
            "desciption": "shroudBNC"
        }
    ],
    "16080": [
        {
            "tcp": "Yes",
            "udp": "",
            "iana": "Unofficial",
            "desciption": "Mac OS X Server Web (HTTP) service with performance cache[324]"
        }
    ],
    "16200": [
        {
            "tcp": "Yes",
            "udp": "",
            "iana": "Unofficial",
            "desciption": "Oracle WebCenter Content: Content Server (formerly known as Oracle Universal Content Management). Port though often changed during installation"
        }
    ],
    "16225": [
        {
            "tcp": "Yes",
            "udp": "",
            "iana": "Unofficial",
            "desciption": "Oracle WebCenter Content: Content Server Web UI. Port though often changed during installation"
        }
    ],
    "16250": [
        {
            "tcp": "Yes",
            "udp": "",
            "iana": "Unofficial",
            "desciption": "Oracle WebCenter Content: Inbound Refinery (formerly known as Oracle Universal Content Management). Port though often changed during installation"
        }
    ],
    "16261": [
        {
            "tcp": "Yes",
            "udp": "Yes",
            "iana": "Unofficial",
            "desciption": "Project Zomboid multiplayer. Additional sequential ports used for each player connecting to server.[citation needed]"
        }
    ],
    "16300": [
        {
            "tcp": "Yes",
            "udp": "",
            "iana": "Unofficial",
            "desciption": "Oracle WebCenter Content: Records Management (formerly known as Oracle Universal Records Management). Port though often changed during installation"
        }
    ],
    "16384": [
        {
            "tcp": "",
            "udp": "Yes",
            "iana": "Unofficial",
            "desciption": "CISCO Default RTP MIN"
        }
    ],
    "16400": [
        {
            "tcp": "Yes",
            "udp": "",
            "iana": "Unofficial",
            "desciption": "Oracle WebCenter Content: Capture (formerly known as Oracle Document Capture). Port though often changed during installation"
        }
    ],
    "16482": [
        {
            "tcp": "",
            "udp": "",
            "iana": "Official",
            "desciption": "CISCO Default RTP MAX"
        }
    ],
    "16567": [
        {
            "tcp": "",
            "udp": "Yes",
            "iana": "Unofficial",
            "desciption": "Battlefield 2 and mods"
        }
    ],
    "17011": [
        {
            "tcp": "Yes",
            "udp": "",
            "iana": "Unofficial",
            "desciption": "Worms multiplayer"
        }
    ],
    "17224": [
        {
            "tcp": "Yes",
            "udp": "Yes",
            "iana": "Official",
            "desciption": "Train Realtime Data Protocol (TRDP) Process Data, network protocol used in train communication.[1][325]"
        }
    ],
    "17225": [
        {
            "tcp": "Yes",
            "udp": "Yes",
            "iana": "Official",
            "desciption": "Train Realtime Data Protocol (TRDP) Message Data, network protocol used in train communication.[1][326]"
        }
    ],
    "17333": [
        {
            "tcp": "Yes",
            "udp": "",
            "iana": "Unofficial",
            "desciption": "CS Server (CSMS), default binary protocol port"
        }
    ],
    "17475": [
        {
            "tcp": "Yes",
            "udp": "",
            "iana": "Unofficial",
            "desciption": "DMXControl 3 Network Broker"
        }
    ],
    "17500": [
        {
            "tcp": "Yes",
            "udp": "Yes",
            "iana": "Official",
            "desciption": "Dropbox LanSync Protocol (db-lsp); used to synchronize file catalogs between Dropbox clients on a local network."
        }
    ],
    "18080": [
        {
            "tcp": "Yes",
            "udp": "No",
            "iana": "Unofficial",
            "desciption": "Monero P2P network communications[citation needed]"
        }
    ],
    "18081": [
        {
            "tcp": "Yes",
            "udp": "No",
            "iana": "Unofficial",
            "desciption": "Monero incoming RPC calls[citation needed]"
        }
    ],
    "18091": [
        {
            "tcp": "Yes",
            "udp": "Yes",
            "iana": "Unofficial",
            "desciption": "memcached Internal REST HTTPS for SSL"
        }
    ],
    "18092": [
        {
            "tcp": "Yes",
            "udp": "Yes",
            "iana": "Unofficial",
            "desciption": "memcached Internal CAPI HTTPS for SSL"
        }
    ],
    "18104": [
        {
            "tcp": "Yes",
            "udp": "",
            "iana": "Official",
            "desciption": "RAD PDF Service"
        }
    ],
    "18200": [
        {
            "tcp": "Yes",
            "udp": "Yes",
            "iana": "Unofficial",
            "desciption": "Audition Online Dance Battle, AsiaSoft Thailand Server status/version check"
        }
    ],
    "18201": [
        {
            "tcp": "Yes",
            "udp": "Yes",
            "iana": "Unofficial",
            "desciption": "Audition Online Dance Battle, AsiaSoft Thailand Server"
        }
    ],
    "18206": [
        {
            "tcp": "Yes",
            "udp": "Yes",
            "iana": "Unofficial",
            "desciption": "Audition Online Dance Battle, AsiaSoft Thailand Server FAM database"
        }
    ],
    "18300": [
        {
            "tcp": "Yes",
            "udp": "Yes",
            "iana": "Unofficial",
            "desciption": "Audition Online Dance Battle, AsiaSoft SEA Server status/version check"
        }
    ],
    "18301": [
        {
            "tcp": "Yes",
            "udp": "Yes",
            "iana": "Unofficial",
            "desciption": "Audition Online Dance Battle, AsiaSoft SEA Server"
        }
    ],
    "18306": [
        {
            "tcp": "Yes",
            "udp": "Yes",
            "iana": "Unofficial",
            "desciption": "Audition Online Dance Battle, AsiaSoft SEA Server FAM database"
        }
    ],
    "18333": [
        {
            "tcp": "Yes",
            "udp": "",
            "iana": "Unofficial",
            "desciption": "Bitcoin testnet[272]"
        }
    ],
    "18400": [
        {
            "tcp": "Yes",
            "udp": "Yes",
            "iana": "Unofficial",
            "desciption": "Audition Online Dance Battle, KAIZEN Brazil Server status/version check"
        }
    ],
    "18401": [
        {
            "tcp": "Yes",
            "udp": "Yes",
            "iana": "Unofficial",
            "desciption": "Audition Online Dance Battle, KAIZEN Brazil Server"
        }
    ],
    "18505": [
        {
            "tcp": "Yes",
            "udp": "Yes",
            "iana": "Unofficial",
            "desciption": "Audition Online Dance Battle R4p3 Server, Nexon Server status/version check"
        }
    ],
    "18506": [
        {
            "tcp": "Yes",
            "udp": "Yes",
            "iana": "Unofficial",
            "desciption": "Audition Online Dance Battle, Nexon Server"
        }
    ],
    "18605": [
        {
            "tcp": "Yes",
            "udp": "Yes",
            "iana": "Unofficial",
            "desciption": "X-BEAT status/version check"
        }
    ],
    "18606": [
        {
            "tcp": "Yes",
            "udp": "Yes",
            "iana": "Unofficial",
            "desciption": "X-BEAT"
        }
    ],
    "18676": [
        {
            "tcp": "Yes",
            "udp": "Yes",
            "iana": "Unofficial",
            "desciption": "YouView"
        }
    ],
    "19000": [
        {
            "tcp": "Yes",
            "udp": "Yes",
            "iana": "Unofficial",
            "desciption": "Audition Online Dance Battle, G10/alaplaya Server status/version check"
        },
        {
            "tcp": "",
            "udp": "Yes",
            "iana": "Unofficial",
            "desciption": "JACK sound server"
        }
    ],
    "19001": [
        {
            "tcp": "Yes",
            "udp": "Yes",
            "iana": "Unofficial",
            "desciption": "Audition Online Dance Battle, G10/alaplaya Server"
        }
    ],
    "19132": [
        {
            "tcp": "",
            "udp": "Yes",
            "iana": "Unofficial",
            "desciption": "Minecraft: Bedrock Edition multiplayer server[327]"
        }
    ],
    "19133": [
        {
            "tcp": "",
            "udp": "Yes",
            "iana": "Unofficial",
            "desciption": "Minecraft: Bedrock Edition IPv6 multiplayer server[327]"
        }
    ],
    "19150": [
        {
            "tcp": "Yes",
            "udp": "Yes",
            "iana": "Unofficial",
            "desciption": "Gkrellm Server"
        }
    ],
    "19226": [
        {
            "tcp": "Yes",
            "udp": "",
            "iana": "Unofficial",
            "desciption": "Panda Software AdminSecure Communication Agent"
        }
    ],
    "19294": [
        {
            "tcp": "Yes",
            "udp": "",
            "iana": "Unofficial",
            "desciption": "Google Talk Voice and Video connections[328]"
        }
    ],
    "19295": [
        {
            "tcp": "",
            "udp": "Yes",
            "iana": "Unofficial",
            "desciption": "Google Talk Voice and Video connections[328]"
        }
    ],
    "19302": [
        {
            "tcp": "",
            "udp": "Yes",
            "iana": "Unofficial",
            "desciption": "Google Talk Voice and Video connections[328]"
        }
    ],
    "19531": [
        {
            "tcp": "Yes",
            "udp": "No",
            "iana": "Unofficial",
            "desciption": "systemd-journal-gatewayd[329]"
        }
    ],
    "19532": [
        {
            "tcp": "Yes",
            "udp": "No",
            "iana": "Unofficial",
            "desciption": "systemd-journal-remote[330]"
        }
    ],
    "19812": [
        {
            "tcp": "Yes",
            "udp": "No",
            "iana": "Official",
            "desciption": "4D database SQL Communication[331]"
        }
    ],
    "19813": [
        {
            "tcp": "Yes",
            "udp": "Yes",
            "iana": "Official",
            "desciption": "4D database Client Server Communication[331]"
        }
    ],
    "19814": [
        {
            "tcp": "Yes",
            "udp": "",
            "iana": "Official",
            "desciption": "4D database DB4D Communication[331]"
        }
    ],
    "19999": [
        {
            "tcp": "",
            "udp": "",
            "iana": "Official",
            "desciption": "Distributed Network Protocol—Secure (DNP—Secure), a secure version of the protocol used in SCADA systems between communicating RTU's and IED's"
        }
    ],
    "20000": [
        {
            "tcp": "",
            "udp": "",
            "iana": "Official",
            "desciption": "Distributed Network Protocol (DNP), a protocol used in SCADA systems between communicating RTU's and IED's"
        },
        {
            "tcp": "",
            "udp": "",
            "iana": "Unofficial",
            "desciption": "Usermin, Web-based Unix/Linux user administration tool (default port)"
        }
    ],
    "20560": [
        {
            "tcp": "Yes",
            "udp": "Yes",
            "iana": "Unofficial",
            "desciption": "Killing Floor"
        }
    ],
    "20582": [
        {
            "tcp": "",
            "udp": "Yes",
            "iana": "Unofficial",
            "desciption": "HW Development IoT comms"
        }
    ],
    "20583": [
        {
            "tcp": "",
            "udp": "Yes",
            "iana": "Unofficial",
            "desciption": "HW Development IoT comms"
        }
    ],
    "20595": [
        {
            "tcp": "",
            "udp": "Yes",
            "iana": "Unofficial",
            "desciption": "0 A.D. Empires Ascendant"
        }
    ],
    "20808": [
        {
            "tcp": "",
            "udp": "Yes",
            "iana": "Unofficial",
            "desciption": "Ableton Link"
        }
    ],
    "21025": [
        {
            "tcp": "Yes",
            "udp": "",
            "iana": "Unofficial",
            "desciption": "Starbound Server (default), Starbound"
        }
    ],
    "22000": [
        {
            "tcp": "Yes",
            "udp": "",
            "iana": "Unofficial",
            "desciption": "Syncthing (default)"
        }
    ],
    "22136": [
        {
            "tcp": "Yes",
            "udp": "",
            "iana": "Unofficial",
            "desciption": "FLIR Systems Camera Resource Protocol"
        }
    ],
    "22222": [
        {
            "tcp": "Yes",
            "udp": "",
            "iana": "Unofficial",
            "desciption": "Davis Instruments, WeatherLink IP"
        }
    ],
    "23073": [
        {
            "tcp": "",
            "udp": "",
            "iana": "Unofficial",
            "desciption": "Soldat Dedicated Server"
        }
    ],
    "23399": [
        {
            "tcp": "",
            "udp": "",
            "iana": "Unofficial",
            "desciption": "Skype default protocol"
        }
    ],
    "23513": [
        {
            "tcp": "?",
            "udp": "?",
            "iana": "Unofficial",
            "desciption": "Duke Nukem 3D source ports"
        }
    ],
    "24441": [
        {
            "tcp": "Yes",
            "udp": "Yes",
            "iana": "Unofficial",
            "desciption": "Pyzor spam detection network"
        }
    ],
    "24444": [
        {
            "tcp": "",
            "udp": "",
            "iana": "Unofficial",
            "desciption": "NetBeans integrated development environment"
        }
    ],
    "24465": [
        {
            "tcp": "Yes",
            "udp": "Yes",
            "iana": "Official",
            "desciption": "Tonido Directory Server for Tonido which is a Personal Web App and P2P platform"
        }
    ],
    "24554": [
        {
            "tcp": "Yes",
            "udp": "Yes",
            "iana": "Official",
            "desciption": "BINKP, Fidonet mail transfers over TCP/IP"
        }
    ],
    "24800": [
        {
            "tcp": "",
            "udp": "",
            "iana": "Unofficial",
            "desciption": "Synergy: keyboard/mouse sharing software"
        }
    ],
    "24842": [
        {
            "tcp": "",
            "udp": "",
            "iana": "Unofficial",
            "desciption": "StepMania: Online: Dance Dance Revolution Simulator"
        }
    ],
    "25565": [
        {
            "tcp": "Yes",
            "udp": "",
            "iana": "Unofficial",
            "desciption": "Minecraft (Java Edition) multiplayer server[332][333]"
        },
        {
            "tcp": "",
            "udp": "Yes",
            "iana": "Unofficial",
            "desciption": "Minecraft (Java Edition) multiplayer server query[334]"
        }
    ],
    "25575": [
        {
            "tcp": "",
            "udp": "Yes",
            "iana": "Unofficial",
            "desciption": "Minecraft (Java Edition) multiplayer server RCON[335]"
        }
    ],
    "25826": [
        {
            "tcp": "",
            "udp": "Yes",
            "iana": "Unofficial",
            "desciption": "collectd default port[336]"
        }
    ],
    "26000": [
        {
            "tcp": "Yes",
            "udp": "Yes",
            "iana": "Official",
            "desciption": "id Software's Quake server"
        },
        {
            "tcp": "Yes",
            "udp": "",
            "iana": "Unofficial",
            "desciption": "EVE Online"
        }
    ],
    "27000": [
        {
            "tcp": "Yes",
            "udp": "",
            "iana": "Unofficial",
            "desciption": "PowerBuilder SySAM license server"
        }
    ],
    "27015": [
        {
            "tcp": "No",
            "udp": "Yes",
            "iana": "Unofficial",
            "desciption": "GoldSrc and Source engine dedicated server port[337]"
        }
    ],
    "27016": [
        {
            "tcp": "",
            "udp": "",
            "iana": "Unofficial",
            "desciption": "Magicka and Space Engineers server port"
        }
    ],
    "27017": [
        {
            "tcp": "Yes",
            "udp": "No",
            "iana": "Unofficial",
            "desciption": "MongoDB daemon process (mongod) and routing service (mongos)[338]"
        }
    ],
    "27031": [
        {
            "tcp": "Ports 27036 & 27037",
            "udp": "Yes",
            "iana": "Unofficial",
            "desciption": "Steam (In-Home Streaming)[337]"
        }
    ],
    "27036": [
        {
            "tcp": "Yes",
            "udp": "Yes",
            "iana": "Unofficial",
            "desciption": "Steam (In-Home Streaming)[337]"
        }
    ],
    "27037": [
        {
            "tcp": "Yes",
            "udp": "Ports 27031 & 27036",
            "iana": "Unofficial",
            "desciption": "Steam (In-Home Streaming)[337]"
        }
    ],
    "27374": [
        {
            "tcp": "",
            "udp": "",
            "iana": "Unofficial",
            "desciption": "Sub7 default."
        }
    ],
    "27888": [
        {
            "tcp": "",
            "udp": "Yes",
            "iana": "Unofficial",
            "desciption": "Kaillera server"
        }
    ],
    "27950": [
        {
            "tcp": "",
            "udp": "Yes",
            "iana": "Unofficial",
            "desciption": "OpenArena outgoing"
        }
    ],
    "28001": [
        {
            "tcp": "",
            "udp": "",
            "iana": "Unofficial",
            "desciption": "Starsiege: Tribes[citation needed]"
        }
    ],
    "28015": [
        {
            "tcp": "",
            "udp": "Yes",
            "iana": "Unofficial",
            "desciption": "Rust (video game)[339]"
        }
    ],
    "28016": [
        {
            "tcp": "",
            "udp": "Yes",
            "iana": "Unofficial",
            "desciption": "Rust RCON (video game)[340]"
        }
    ],
    "28260": [
        {
            "tcp": "Yes",
            "udp": "",
            "iana": "Unofficial",
            "desciption": "Palo Alto Networks' Panorama HA-1 backup unencrypted sync port.[25]"
        }
    ],
    "28443": [
        {
            "tcp": "Yes",
            "udp": "",
            "iana": "Unofficial",
            "desciption": "Palo Alto Networks' Panorama-to-managed devices software updates, PAN-OS 8.0 and later.[182]"
        }
    ],
    "28769": [
        {
            "tcp": "Yes",
            "udp": "",
            "iana": "Unofficial",
            "desciption": "Palo Alto Networks' Panorama HA unencrypted sync port.[25]"
        }
    ],
    "28770": [
        {
            "tcp": "Yes",
            "udp": "",
            "iana": "Unofficial",
            "desciption": "Palo Alto Networks' Panorama HA-1 backup sync port.[25]"
        }
    ],
    "28852": [
        {
            "tcp": "Yes",
            "udp": "Yes",
            "iana": "Unofficial",
            "desciption": "Killing Floor[citation needed]"
        }
    ],
    "28910": [
        {
            "tcp": "Yes",
            "udp": "Yes",
            "iana": "Unofficial",
            "desciption": "Nintendo Wi-Fi Connection[342]"
        }
    ],
    "28960": [
        {
            "tcp": "Yes",
            "udp": "Yes",
            "iana": "Unofficial",
            "desciption": "Call of Duty; Call of Duty: United Offensive; Call of Duty 2; Call of Duty 4: Modern Warfare;[citation needed] Call of Duty: World at War (PC platform)[343]"
        }
    ],
    "29000": [
        {
            "tcp": "?",
            "udp": "?",
            "iana": "Unofficial",
            "desciption": "Perfect World, an adventure and fantasy MMORPG[citation needed]"
        }
    ],
    "29070": [
        {
            "tcp": "Yes",
            "udp": "Yes",
            "iana": "Unofficial",
            "desciption": "Jedi Knight: Jedi Academy by Ravensoft[citation needed]"
        }
    ],
    "29920": [
        {
            "tcp": "Yes",
            "udp": "Yes",
            "iana": "Unofficial",
            "desciption": "Nintendo Wi-Fi Connection[342]"
        }
    ],
    "30000": [
        {
            "tcp": "",
            "udp": "Yes",
            "iana": "Unofficial",
            "desciption": "XLink Kai P2P"
        }
    ],
    "30033": [
        {
            "tcp": "?",
            "udp": "?",
            "iana": "Unofficial",
            "desciption": "Teamspeak3 Chat Server[307]"
        }
    ],
    "30564": [
        {
            "tcp": "Yes",
            "udp": "",
            "iana": "Unofficial",
            "desciption": "Multiplicity: keyboard/mouse/clipboard sharing software[citation needed]"
        }
    ],
    "31337": [
        {
            "tcp": "Yes",
            "udp": "",
            "iana": "Unofficial",
            "desciption": "Back Orifice and  Back Orifice 2000 remote administration tools[344][345]"
        }
    ],
    "31416": [
        {
            "tcp": "?",
            "udp": "?",
            "iana": "Unofficial",
            "desciption": "BOINC RPC[346]"
        }
    ],
    "31438": [
        {
            "tcp": "Yes",
            "udp": "",
            "iana": "Unofficial",
            "desciption": "Rocket U2[347][self-published source?]"
        }
    ],
    "31457": [
        {
            "tcp": "Yes",
            "udp": "",
            "iana": "Official",
            "desciption": "TetriNET"
        }
    ],
    "32137": [
        {
            "tcp": "Yes",
            "udp": "Yes",
            "iana": "Unofficial",
            "desciption": "Immunet Protect (UDP in version 2.0,[348] TCP since version 3.0[349])"
        }
    ],
    "32400": [
        {
            "tcp": "Yes",
            "udp": "",
            "iana": "Official",
            "desciption": "Plex Media Server[350]"
        }
    ],
    "32764": [
        {
            "tcp": "Yes",
            "udp": "",
            "iana": "Unofficial",
            "desciption": "A backdoor found on certain Linksys, Netgear and other wireless DSL modems/combination routers[351]"
        }
    ],
    "32887": [
        {
            "tcp": "Yes",
            "udp": "",
            "iana": "Unofficial",
            "desciption": "Ace of Spades, a multiplayer FPS video game[citation needed]"
        }
    ],
    "32976": [
        {
            "tcp": "Yes",
            "udp": "",
            "iana": "Unofficial",
            "desciption": "LogMeIn Hamachi, a VPN application; also TCP port 12975 and SSL (TCP 443).[352]"
        }
    ],
    "33434": [
        {
            "tcp": "Yes",
            "udp": "Yes",
            "iana": "Official",
            "desciption": "traceroute"
        }
    ],
    "33848": [
        {
            "tcp": "",
            "udp": "Yes",
            "iana": "Unofficial",
            "desciption": "Jenkins, a continuous integration (CI) tool[353][354]"
        }
    ],
    "34000": [
        {
            "tcp": "",
            "udp": "Yes",
            "iana": "Unofficial",
            "desciption": "Infestation: Survivor Stories (formerly known as The War Z), a multiplayer zombie video game[verification needed]"
        }
    ],
    "34197": [
        {
            "tcp": "No",
            "udp": "Yes",
            "iana": "Unofficial",
            "desciption": "Factorio, a multiplayer survival and factory-building game[355]"
        }
    ],
    "35357": [
        {
            "tcp": "Yes",
            "udp": "",
            "iana": "Official",
            "desciption": "OpenStack Identity (Keystone) administration[356][self-published source?]"
        }
    ],
    "36330": [
        {
            "tcp": "Yes",
            "udp": "",
            "iana": "Unofficial",
            "desciption": "Folding@home Control Port"
        }
    ],
    "37008": [
        {
            "tcp": "",
            "udp": "Yes",
            "iana": "Unofficial",
            "desciption": "TZSP intrusion detection[citation needed]"
        }
    ],
    "40000": [
        {
            "tcp": "Yes",
            "udp": "Yes",
            "iana": "Official",
            "desciption": "SafetyNET p – a real-time Industrial Ethernet protocol"
        }
    ],
    "41121": [
        {
            "tcp": "Yes",
            "udp": "Yes",
            "iana": "Official",
            "desciption": "Tentacle Server[357] - Pandora FMS"
        }
    ],
    "41794": [
        {
            "tcp": "Yes",
            "udp": "Yes",
            "iana": "Official",
            "desciption": "Crestron Control Port[358] - Crestron Electronics"
        }
    ],
    "41795": [
        {
            "tcp": "Yes",
            "udp": "Yes",
            "iana": "Official",
            "desciption": "Crestron Terminal Port[359] - Crestron Electronics"
        }
    ],
    "41796": [
        {
            "tcp": "Yes",
            "udp": "No",
            "iana": "Official",
            "desciption": "Crestron Secure Control Port[360] - Crestron Electronics"
        }
    ],
    "41797": [
        {
            "tcp": "Yes",
            "udp": "No",
            "iana": "Official",
            "desciption": "Crestron Secure Terminal Port[361] - Crestron Electronics"
        }
    ],
    "43110": [
        {
            "tcp": "Yes",
            "udp": "",
            "iana": "Unofficial",
            "desciption": "ZeroNet web UI default port[citation needed]"
        }
    ],
    "44405": [
        {
            "tcp": "Yes",
            "udp": "",
            "iana": "Unofficial",
            "desciption": "Mu Online Connect Server[citation needed]"
        }
    ],
    "44818": [
        {
            "tcp": "Yes",
            "udp": "Yes",
            "iana": "Official",
            "desciption": "EtherNet/IP explicit messaging"
        }
    ],
    "49151": [
        {
            "tcp": "Reserved",
            "udp": "Reserved",
            "iana": "Official",
            "desciption": "Reserved[1]"
        }
    ],
    "49160": [
        {
            "tcp": "Yes",
            "udp": "",
            "iana": "Unofficial",
            "desciption": "Palo Alto Networks' Panorama.[182]"
        }
    ],
    "49190": [
        {
            "tcp": "Yes",
            "udp": "",
            "iana": "Unofficial",
            "desciption": "Palo Alto Networks' Panorama.[182]"
        }
    ],
    "Yes": [
        {
            "tcp": "",
            "udp": "Kaspersky Network Agent[citation needed]",
            "iana": "",
            "desciption": "Unofficial"
        }
    ],
    "1560–1590": [
        {
            "tcp": "Yes",
            "udp": "Yes",
            "iana": "Unofficial",
            "desciption": "1C:Enterprise cluster working processes[132]"
        }
    ],
    "1582–1583": [
        {
            "tcp": "Yes",
            "udp": "",
            "iana": "Unofficial",
            "desciption": "IBM Tivoli Storage Manager server web interface[126]"
        }
    ],
    "2222–2226": [
        {
            "tcp": "Yes",
            "udp": "",
            "iana": "Official",
            "desciption": "ESET Remote administrator[152]"
        }
    ],
    "2546–2548": [
        {
            "tcp": "Yes",
            "udp": "Yes",
            "iana": "Official",
            "desciption": "EVault data protection services"
        }
    ],
    "": [
        {
            "tcp": "Yes",
            "udp": "Xonotic, an open-source arena shooter",
            "iana": "",
            "desciption": "Unofficial"
        }
    ],
    "4444–4445": [
        {
            "tcp": "Yes",
            "udp": "",
            "iana": "Unofficial",
            "desciption": "I2P HTTP/S proxy"
        }
    ],
    "4502–4534": [
        {
            "tcp": "Yes",
            "udp": "",
            "iana": "Official",
            "desciption": "Microsoft Silverlight connectable ports under non-elevated trust"
        }
    ],
    "4505–4506": [
        {
            "tcp": "Yes",
            "udp": "",
            "iana": "Unofficial",
            "desciption": "Salt master"
        }
    ],
    "4610–4640": [
        {
            "tcp": "Yes",
            "udp": "",
            "iana": "Unofficial",
            "desciption": "QualiSystems TestShell Suite Services"
        }
    ],
    "?": [
        {
            "tcp": "?",
            "udp": "MAMP[293]",
            "iana": "",
            "desciption": "Unofficial"
        }
    ],
    "5000–5500": [
        {
            "tcp": "No",
            "udp": "Yes",
            "iana": "Unofficial",
            "desciption": "League of Legends, a multiplayer online battle arena video game[201]"
        }
    ],
    "5988–5989": [
        {
            "tcp": "Yes",
            "udp": "",
            "iana": "Official",
            "desciption": "CIM-XML (DMTF Protocol)[236]"
        }
    ],
    "6000–6063": [
        {
            "tcp": "Yes",
            "udp": "Yes",
            "iana": "Official",
            "desciption": "X11—used between an X client and server over the network"
        }
    ],
    "6463–6472": [
        {
            "tcp": "Yes",
            "udp": "",
            "iana": "Unofficial",
            "desciption": "Discord RPC[238]"
        }
    ],
    "6560–6561": [
        {
            "tcp": "Yes",
            "udp": "",
            "iana": "Unofficial",
            "desciption": "Speech-Dispatcher daemon[citation needed]"
        }
    ],
    "6660–6664": [
        {
            "tcp": "Yes",
            "udp": "",
            "iana": "Unofficial",
            "desciption": "Internet Relay Chat (IRC)"
        }
    ],
    "6665–6669": [
        {
            "tcp": "Yes",
            "udp": "",
            "iana": "Official",
            "desciption": "Internet Relay Chat (IRC)"
        }
    ],
    "6783–6785": [
        {
            "tcp": "Yes",
            "udp": "",
            "iana": "Unofficial",
            "desciption": "Splashtop Remote server broadcast"
        }
    ],
    "6881–6887": [
        {
            "tcp": "Yes",
            "udp": "Yes",
            "iana": "Unofficial",
            "desciption": "BitTorrent part of full range of ports used most often"
        }
    ],
    "6889–6890": [
        {
            "tcp": "Yes",
            "udp": "Yes",
            "iana": "Unofficial",
            "desciption": "BitTorrent part of full range of ports used most often"
        }
    ],
    "6891–6900": [
        {
            "tcp": "Yes",
            "udp": "Yes",
            "iana": "Unofficial",
            "desciption": "Windows Live Messenger (File transfer)"
        }
    ],
    "6902–6968": [
        {
            "tcp": "Yes",
            "udp": "Yes",
            "iana": "Unofficial",
            "desciption": "BitTorrent part of full range of ports used most often"
        }
    ],
    "6970–6999": [
        {
            "tcp": "Yes",
            "udp": "Yes",
            "iana": "Unofficial",
            "desciption": "BitTorrent part of full range of ports used most often"
        },
        {
            "tcp": "",
            "udp": "Yes",
            "iana": "Unofficial",
            "desciption": "QuickTime Streaming Server[10]"
        }
    ],
    "7652–7654": [
        {
            "tcp": "Yes",
            "udp": "",
            "iana": "Unofficial",
            "desciption": "I2P anonymizing overlay network"
        }
    ],
    "7656–7660": [
        {
            "tcp": "Yes",
            "udp": "",
            "iana": "Unofficial",
            "desciption": "I2P anonymizing overlay network"
        }
    ],
    "7707–7708": [
        {
            "tcp": "",
            "udp": "Yes",
            "iana": "Unofficial",
            "desciption": "Killing Floor"
        }
    ],
    "7777–7788": [
        {
            "tcp": "Yes",
            "udp": "Yes",
            "iana": "Unofficial",
            "desciption": "Unreal Tournament series default server[citation needed]"
        }
    ],
    "8194–8195": [
        {
            "tcp": "?",
            "udp": "?",
            "iana": "Official",
            "desciption": "Bloomberg Terminal[266]"
        }
    ],
    "9050–9051": [
        {
            "tcp": "Yes",
            "udp": "",
            "iana": "Unofficial",
            "desciption": "Tor (SOCKS-5 proxy client)"
        }
    ],
    "10000–20000": [
        {
            "tcp": "No",
            "udp": "Yes",
            "iana": "Unofficial",
            "desciption": "Used on VoIP networks for receiving and transmitting voice telephony traffic which includes Google Voice via the OBiTalk ATA devices as well as on the MagicJack and Vonage ATA network devices.[306]"
        }
    ],
    "10201–10204": [
        {
            "tcp": "Yes",
            "udp": "",
            "iana": "Unofficial",
            "desciption": "FRISK Software International's f-protd virus scanning daemon for Unix platforms[309]"
        }
    ],
    "13000–13050": [
        {
            "tcp": "",
            "udp": "Yes",
            "iana": "Unofficial",
            "desciption": "Second Life, used for server UDP in-bound[320]"
        }
    ],
    "16384-16403": [
        {
            "tcp": "",
            "udp": "Yes",
            "iana": "Unofficial",
            "desciption": "Real-time Transport Protocol (RTP), RTP Control Protocol (RTCP), used by Apple's iChat for audio and video[10]"
        }
    ],
    "16384-16387": [
        {
            "tcp": "",
            "udp": "Yes",
            "iana": "Unofficial",
            "desciption": "Real-time Transport Protocol (RTP), RTP Control Protocol (RTCP), used by Apple's FaceTime and Game Center[10]"
        }
    ],
    "16393-16402": [
        {
            "tcp": "",
            "udp": "Yes",
            "iana": "Unofficial",
            "desciption": "Real-time Transport Protocol (RTP), RTP Control Protocol (RTCP), used by Apple's FaceTime and Game Center[10]"
        }
    ],
    "16403-16472": [
        {
            "tcp": "",
            "udp": "Yes",
            "iana": "Unofficial",
            "desciption": "Real-time Transport Protocol (RTP), RTP Control Protocol (RTCP), used by Apple's Game Center[10]"
        }
    ],
    "26900–26901": [
        {
            "tcp": "Yes",
            "udp": "",
            "iana": "Unofficial",
            "desciption": "EVE Online"
        }
    ],
    "26909-26911": [
        {
            "tcp": "Yes",
            "udp": "",
            "iana": "Unofficial",
            "desciption": "Action Tanks Online"
        }
    ],
    "27000–27006": [
        {
            "tcp": "",
            "udp": "Yes",
            "iana": "Unofficial",
            "desciption": "id Software's QuakeWorld master server"
        }
    ],
    "27000–27009": [
        {
            "tcp": "Yes",
            "udp": "Yes",
            "iana": "Official",
            "desciption": "FlexNet Publisher's License server (from the range of default ports)"
        }
    ],
    "27000–27015": [
        {
            "tcp": "No",
            "udp": "Yes",
            "iana": "Unofficial",
            "desciption": "Steam (game client traffic)[337][self-published source]"
        }
    ],
    "27015-27018": [
        {
            "tcp": "",
            "udp": "Yes",
            "iana": "Unofficial",
            "desciption": "Unturned, a survival game"
        }
    ],
    "27015–27030": [
        {
            "tcp": "No",
            "udp": "Yes",
            "iana": "Unofficial",
            "desciption": "Steam (matchmaking and HLTV)[337]"
        },
        {
            "tcp": "Yes",
            "udp": "Yes",
            "iana": "Unofficial",
            "desciption": "Steam (downloads)[337]"
        }
    ],
    "27500–27900": [
        {
            "tcp": "",
            "udp": "Yes",
            "iana": "Unofficial",
            "desciption": "id Software's QuakeWorld"
        }
    ],
    "27901–27910": [
        {
            "tcp": "",
            "udp": "Yes",
            "iana": "Unofficial",
            "desciption": "id Software's Quake II master server"
        }
    ],
    "27960–27969": [
        {
            "tcp": "",
            "udp": "Yes",
            "iana": "Unofficial",
            "desciption": "Activision's Enemy Territory and id Software's Quake III Arena, Quake III and Quake Live and some ioquake3 derived games, such as Urban Terror (OpenArena incoming)"
        }
    ],
    "28770–28771": [
        {
            "tcp": "",
            "udp": "Yes",
            "iana": "Unofficial",
            "desciption": "AssaultCube Reloaded, a video game based upon a modification of AssaultCube[citation needed]"
        }
    ],
    "28785–28786": [
        {
            "tcp": "",
            "udp": "Yes",
            "iana": "Unofficial",
            "desciption": "Cube 2: Sauerbraten[341][self-published source?]"
        }
    ],
    "29900–29901": [
        {
            "tcp": "Yes",
            "udp": "Yes",
            "iana": "Unofficial",
            "desciption": "Nintendo Wi-Fi Connection[342]"
        }
    ],
    "43594–43595": [
        {
            "tcp": "?",
            "udp": "?",
            "iana": "Unofficial",
            "desciption": "RuneScape[362]"
        }
    ],
    "47808–47823": [
        {
            "tcp": "Yes",
            "udp": "Yes",
            "iana": "Official",
            "desciption": "BACnet Building Automation and Control Networks (4780810 = BAC016 to 4782310 = BACF16)"
        }
    ]
};

module.exports = { wellKnownPorts, registeredPorts };

// https://en.wikipedia.org/wiki/List_of_TCP_and_UDP_port_numbers

// var json={};
// var temp='';
// var isrowspan=false;
// $('#mw-content-text > div.mw-parser-output > table:nth-child(19) > tbody tr').each(function(i, n){
//     var row = $(n);
//     if(row.find('td:eq(0)').attr('rowspan')){
//         temp=row.find('td:eq(0)').text().trim();
//         json[temp
//         ]=[
//             {
//             tcp:row.find('td:eq(1)').text().trim(),
//             udp:row.find('td:eq(2)').text().trim(),
//             iana:row.find('td:eq(3)').text().trim(),
//             desciption:row.find('td:eq(4)').text().trim(),
//             sctp:row.find('td:eq(5)').text().trim()
//             }
//         ];
//         isrowspan=true;
//     } else if(isrowspan){
//         json[temp
//         ].push({
//             tcp:row.find('td:eq(0)').text().trim(),
//             udp:row.find('td:eq(1)').text().trim(),
//             iana:row.find('td:eq(2)').text().trim(),
//             desciption:row.find('td:eq(3)').text().trim(),
//             sctp:row.find('td:eq(4)').text().trim()
//         });
//         temp='';
//         isrowspan=false;
//     }else{
//         json[row.find('td:eq(0)').text().trim()
//         ]=[
//             {
//             tcp:row.find('td:eq(1)').text().trim(),
//             udp:row.find('td:eq(2)').text().trim(),
//             iana:row.find('td:eq(3)').text().trim(),
//             desciption:row.find('td:eq(4)').text().trim(),
//             sctp:row.find('td:eq(5)').text().trim()
//             }
//         ];
//         temp='';
//         isrowspan=false;
//     }
// });
