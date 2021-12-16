<!DOCTYPE html>
<html lang="en" dir="ltr">

<head>

  <meta charset="utf-8" name="viewport" content="width=device-width, initial-scale=1">

  <title></title>


  <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossorigin="anonymous">
  <link rel="stylesheet" href="http://maxcdn.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css">
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.0/jquery.min.js"></script>
  <script src="http://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/js/bootstrap.min.js"></script>

  <link rel='stylesheet' href='https://fonts.googleapis.com/icon?family=Material+Icons'>
  <link href="https://fonts.googleapis.com/css?family=Poppins:400,400i,500,500i,600&display=swap" rel="stylesheet">
  <script type="text/javascript" src="//dapi.kakao.com/v2/maps/sdk.js?appkey=1e89f4cdbfd1368a1cf2e7f5a510e2d7&libraries=services"></script>
  <link rel='stylesheet' href='style1.css'>
</head>

<body>
  <%@ page import ="java.sql.*" %>
    <% String firstName="";
try{

String username = request.getParameter("username");
String password = request.getParameter("password");
firstName = request.getParameter("firstname11");
String lastName = request.getParameter("lastname");
String details = request.getParameter("details");
Class.forName("com.mysql.cj.jdbc.Driver");  // MySQL database connection
Connection conn = DriverManager.getConnection("jdbc:mysql://localhost:3306/website_info?" + "user=root&password=xohyun!1018");

String sql = "insert into users(user_name,password,first_name,last_name,details)values(	?,?,?,?,?)";
PreparedStatement ps = null;
ps = conn.prepareStatement(sql);
ps.setString(1,username);
ps.setString(2, password);
ps.setString(3, firstName);
ps.setString(4, lastName);
ps.setString(5, details);

int i=ps.executeUpdate();

if(i==0)  {

   firstName = "";
   }
}
catch(Exception e){
out.println("Something went wrong !! Please try again");
}
%>
  <div class="wrapper">
    <!-- Navaagation -->
    <!-- Top container -->
    <div class="container p-0">
      <nav class="navbar navbar-dark fixed-top bg-dark flex-md-nowrap p-0 shadow">
        <a class="navbar-brand col-sm-3 col-md-2 mr-0" href="final.html">SKKU Movies</a>
        <input class="form-control form-control-dark w-50 hide" id="mainsearch" type="text" placeholder="Search" aria-label="Search">
        <button type="button hide" class="btn btn-primary hide" id="searchBtn" onclick="getsearch();">Search</button>
        <ul class="navbar-nav px-3">
          <li class="nav-item text-nowrap">
            <p id="welcome">Welcome
              <%=firstName%>!</p>
            <a class="nav-link" href="final.html">Logout</a>
          </li>
        </ul>
      </nav>

      <div class="container-fluid">
        <div class="row">
          <nav class="col-md-2 d-none d-md-block bg-light sidebar">
            <div class="sidebar-sticky">
              <ul class="nav flex-column">
                <li class="nav-item">
                  <a class="nav-link active" href="#">
                    <span data-feather="home"></span>
                    <i class="material-icons" id="li_movie">movie</i> Movie List <span class="sr-only">(current)</span>
                  </a>
                </li>
              </ul>

              <hr />

              <ul class="nav flex-column mb-2">
                <li class="nav-item">
                  <a class="nav-link" href="#">
                    <span data-feather="file-text"></span>
                    <i class="material-icons" id="li_ticket">receipt</i> Ticketing
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">
                    <span data-feather="file-text"></span>
                    <i class="material-icons" id="li_maps">explore</i> Maps
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">
                    <span data-feather="file-text"></span>
                    <i class="material-icons" id="contactus">link</i> Contact us
                  </a>
                </li>
              </ul>


            </div>
          </nav>

          <main role="main" class="col-md-9 ml-sm-auto col-lg-10 px-4 movie_list">
            <div class="pt-8 pb-2 mb-3 border-bottom moviearea">

              <div class="row">
                <h1>Movies</h1>
              </div>

              <div class="row">

                <!-- Movie Card Start -->
                <div class="card-view">
                  <div class="card-header spiderman">

                  </div>

                  <div class="card-movie-content">
                    <div class="card-movie-content-head">
                      <a href="#">
                        <h3 class="card-movie-title">Spiderman:No way home</h3>
                      </a>
                      <div class="ratings" style="color: blue;">12+</div>
                    </div>
                    <div class="card-movie-info">
                      <div class="movie-running-time">
                        <label>Release Date</label>
                        <span>2021.12.15</span>
                      </div>
                      <div class="movie-running-time">
                        <label>Running time</label>
                        <span>2hr 09min</span>
                      </div>
                    </div>
                  </div>
                </div>
                <!-- Movie Card End -->

                <!-- Movie Card Start -->
                <div class="card-view">
                  <div class="card-header enkanto">
                  </div>
                  <div class="card-movie-content">
                    <div class="card-movie-content-head">
                      <a href="#">
                        <h3 class="card-movie-title">Enkanto</h3>
                      </a>
                      <div class="ratings" style="color: green;">All</div>
                    </div>
                    <br>
                    <div class="card-movie-info">
                      <div class="movie-running-time">
                        <label>Release Date</label>
                        <span>2021.11.14</span>
                      </div>
                      <div class="movie-running-time">
                        <label>Running time</label>
                        <span>2hr 13min</span>
                      </div>
                    </div>
                  </div>
                </div>
                <!-- Movie Card End -->

                <!-- Movie Card Start -->
                <div class="card-view">
                  <div class="card-header dlup">
                  </div>
                  <div class="card-movie-content">
                    <div class="card-movie-content-head">
                      <a href="#">
                        <h3 class="card-movie-title">Don't Look Up</h3>
                      </a>
                      <div class="ratings" style="color: orange;">15+</div>
                    </div>
                    <br>
                    <div class="card-movie-info">
                      <div class="movie-running-time">
                        <label>Release Date</label>
                        <span>2021.12.08</span>
                      </div>
                      <div class="movie-running-time">
                        <label>Running time</label>
                        <span>2hr 33min</span>
                      </div>
                    </div>
                  </div>
                </div>
                <!-- Movie Card End -->
                <!-- Movie Card Start -->
                <div class="card-view">
                  <div class="card-header dune">
                  </div>
                  <div class="card-movie-content">
                    <div class="card-movie-content-head">
                      <a href="#">
                        <h3 class="card-movie-title">Dune</h3>
                      </a>
                      <div class="ratings" style="color: blue;">12+</div>
                    </div>
                    <br>
                    <div class="card-movie-info">
                      <div class="movie-running-time">
                        <label>Release Date</label>
                        <span>2021.10.20</span>
                      </div>
                      <div class="movie-running-time">
                        <label>Running time</label>
                        <span>2hr 36min</span>
                      </div>
                    </div>
                  </div>
                </div>
                <!-- Movie Card End -->

                <!-- Movie Card Start -->
                <div class="card-view">
                  <div class="card-header kubo">
                  </div>
                  <div class="card-movie-content">
                    <div class="card-movie-content-head">
                      <a href="#">
                        <h3 class="card-movie-title">A Day in the Life of Kubo the Novelist</h3>
                      </a>
                      <div class="ratings" style="color: blue;">12+</div>
                    </div>
                    <div class="card-movie-info">
                      <div class="movie-running-time">
                        <label>Release Date</label>
                        <span>2012.12.09</span>
                      </div>
                      <div class="movie-running-time">
                        <label>Running time</label>
                        <span>2hr 0min</span>
                      </div>
                    </div>
                  </div>
                </div>
                <!-- Movie Card End -->



                <!-- Movie Card Start -->
                <div class="card-view">
                  <div class="card-header foreverfl">
                  </div>
                  <div class="card-movie-content">
                    <div class="card-movie-content-head">
                      <a href="#">
                        <h3 class="card-movie-title">Forever First Love</h3>
                      </a>
                      <div class="ratings" style="color: blue;">15+</div>
                    </div>
                    <br>
                    <div class="card-movie-info">
                      <div class="movie-running-time">
                        <label>Release Date</label>
                        <span>2012.12.09</span>
                      </div>
                      <div class="movie-running-time">
                        <label>Running time</label>
                        <span>2hr 19min</span>
                      </div>
                    </div>
                  </div>
                </div>
                <!-- Movie Card End -->

                <!-- Movie Card Start -->
                <div class="card-view">
                  <div class="card-header sparta">
                  </div>
                  <br>
                  <div class="card-movie-content">
                    <div class="card-movie-content-head">
                      <a href="#">
                        <h3 class="card-movie-title">Spartacus</h3>
                      </a>
                      <div class="ratings" style="color: green;">All</div>
                    </div>
                    <div class="card-movie-info">
                      <div class="movie-running-time">
                        <label>Release Date</label>
                        <span>2021.12.11</span>
                      </div>
                      <div class="movie-running-time">
                        <label>Running time</label>
                        <span>2hr 14min</span>
                      </div>
                    </div>
                  </div>
                </div>
                <!-- Movie Card End -->

                <!-- Movie Card Start -->
                <div class="card-view">
                  <div class="card-header nick">
                  </div>
                  <br>
                  <div class="card-movie-content">
                    <div class="card-movie-content-head">
                      <a href="#">
                        <h3 class="card-movie-title">Notorious Nick</h3>
                      </a>
                      <div class="ratings" style="color: blue;">15+</div>
                    </div>
                    <div class="card-movie-info">
                      <div class="movie-running-time">
                        <label>Release Date</label>
                        <span>2021.12.09</span>
                      </div>
                      <div class="movie-running-time">
                        <label>Running time</label>
                        <span>2hr 33min</span>
                      </div>
                    </div>
                  </div>
                </div>
                <!-- Movie Card End -->


              </div>
            </div>
            <!-- movie ticketing -->
            <div class="hide" id="ticketingarea">
              <div class="movie-container">
                <label>Select a movie</label>
                <select id="movie">
                  <option value="15">Spiderman: No Way Home ($15)</option>
                  <option value="15">Enkanto ($15)</option>
                  <option value="15">Don't Look Up ($15)</option>
                  <option value="15">Dune ($15)</option>
                  <option value="15">A Day in the Life of Kubo the Novelist ($15)</option>
                  <option value="15">Forever First Love (&15)</option>
                  <option value="15">Spartacus ($15)</option>
                  <option value="15">Notorious Nick ($15)</option>
                </select>
              </div>

              <ul class="showcase">
                <li>
                  <div class="seat"></div>
                  <small>N/A</small>
                </li>
                <li>
                  <div class="seat selected"></div>
                  <small>Selected</small>
                </li>
                <li>
                  <div class="seat occupied"></div>
                  <small>Occupied</small>
                </li>
              </ul>

              <div class="container3">
                <div class="screen"><center>screen</center></div>

                <div class="row">
                  <div class="seat"></div>
                  <div class="seat"></div>
                  <div class="seat"></div>
                  <div class="seat"></div>
                  <div class="seat"></div>
                  <div class="seat"></div>
                  <div class="seat"></div>
                  <div class="seat"></div>
                </div>

                <div class="row">
                  <div class="seat"></div>
                  <div class="seat"></div>
                  <div class="seat occupied"></div>
                  <div class="seat occupied"></div>
                  <div class="seat"></div>
                  <div class="seat"></div>
                  <div class="seat"></div>
                  <div class="seat"></div>
                </div>

                <div class="row">
                  <div class="seat"></div>
                  <div class="seat"></div>
                  <div class="seat"></div>
                  <div class="seat"></div>
                  <div class="seat"></div>
                  <div class="seat"></div>
                  <div class="seat occupied"></div>
                  <div class="seat occupied"></div>
                </div>

                <div class="row">
                  <div class="seat"></div>
                  <div class="seat"></div>
                  <div class="seat"></div>
                  <div class="seat"></div>
                  <div class="seat"></div>
                  <div class="seat"></div>
                  <div class="seat"></div>
                  <div class="seat"></div>
                </div>

                <div class="row">
                  <div class="seat"></div>
                  <div class="seat"></div>
                  <div class="seat"></div>
                  <div class="seat occupied"></div>
                  <div class="seat occupied"></div>
                  <div class="seat"></div>
                  <div class="seat"></div>
                  <div class="seat"></div>
                </div>

                <div class="row">
                  <div class="seat"></div>
                  <div class="seat"></div>
                  <div class="seat"></div>
                  <div class="seat"></div>
                  <div class="seat occupied"></div>
                  <div class="seat occupied"></div>
                  <div class="seat occupied"></div>
                  <div class="seat"></div>
                </div>
              </div>

              <p class="text">
                You have selected <span id="count">0</span> seats for a price of $<span id="price">0</span>
              </p>
              <button type="button" class="btn btn-primary" id="ticketBtn" onclick="">Done</button>


            </div>
            <!-- ticketing end -->

            <!-- Contact us-->
            <div class="hide" id="contactdiv">
              <div class="container2">
                <div class="content">
                  <div class="left-side">
                    <div class="address details">
                      <i class="fas fa-map-marker-alt"></i>
                      <div class="topic">Address</div>
                      <div class="text-one">skku, Suwon</div>
                    </div>
                    <div class="phone details">
                      <i class="fas fa-phone-alt"></i>
                      <div class="topic">Phone</div>
                      <div class="text-one">+82 010-1234-5678</div>
                      <div class="text-two">+82 010-9876-4321</div>
                    </div>
                    <div class="email details">
                      <i class="fas fa-envelope"></i>
                      <div class="topic">Email</div>
                      <div class="text-one">skkuverygood@gmail.com</div>
                      <div class="text-two">ilovetamer@gmail.com</div>
                    </div>
                  </div>
                  <div class="right-side">
                    <div class="topic-text">Send us a message</div>
                    <p>If you have any problem or any types of quries related to this site, you can send me message from here. It's my pleasure to help you.</p>
                    <form action="#">
                      <div class="input-box">
                        <input type="text" placeholder="Enter your name" id="sendname">
                      </div>
                      <div class="input-box">
                        <input type="text" placeholder="Enter your email" id="sendemail">
                      </div>
                      <div class="input-box" id="contentSize">
                        <input type="textarea" placeholder="Contents" rows="10" id="sendcontent">
                      </div>
                      <div class="input-box message-box">

                      </div>
                      <div class="button">
                        <input type="button" value="Send Now" id="contact_send" onclick="sendus();">
                      </div>
                    </form>
                  </div>
                </div>
              </div>

            </div>
            <!-- contact us end -->
            
            <!-- map for movie theater -->
            <div class="hide" id="map" style="width:100%;height:700px;"></div>

          </main>
        </div>
      </div>

    </div>


  </div>
  <!-- wrapper ends -->

  <script type="text/javascript" src="final.js"></script>
</body>

</html>
