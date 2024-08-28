import './Board.css'
import { FaChessPawn } from "react-icons/fa6";
import { FaChessRook } from "react-icons/fa6";
import { FaRegChessRook } from "react-icons/fa6";
import { FaChessKnight } from "react-icons/fa6";
import { FaRegChessKnight } from "react-icons/fa6";
import { FaChessBishop } from "react-icons/fa6";
import { FaRegChessBishop } from "react-icons/fa6";
import { FaChessKing } from "react-icons/fa";
import { TbChessKing } from "react-icons/tb";
import { FaChessQueen } from "react-icons/fa";
import { FaRegChessQueen } from "react-icons/fa6";
import { FaRegChessPawn } from "react-icons/fa6";

function Board(){
    return(
        <div class="chess">
            
        <div>
           <table>
             <tr>
               <td><FaChessRook class="icon"  /></td> 
               <td  style={{backgroundColor: "green"}}><FaChessKnight class="icon" /></td>
               <td><FaChessBishop  class="icon" /></td>
               <td  style={{backgroundColor: "green"}}><FaChessKing class="icon"  /></td>
               <td><FaChessQueen  class="icon" /></td>
               <td style={{backgroundColor: "green"}}><FaChessBishop class="icon"  /></td>
               <td ><FaChessKnight  class="icon" /></td>
               <td  style={{backgroundColor: "green"}}><FaChessRook class="icon"  /></td> 
            </tr> 

            <tr>
               <td  style={{backgroundColor: "green"}}><FaChessPawn  class="icon" /></td> 
               <td><FaChessPawn  class="icon" /></td>
               <td  style={{backgroundColor: "green"}}><FaChessPawn  class="icon" /></td>
               <td><FaChessPawn class="icon"  /></td>
               <td  style={{backgroundColor: "green"}}><FaChessPawn class="icon"  /></td>
               <td><FaChessPawn  class="icon" /></td>
               <td  style={{backgroundColor: "green"}}><FaChessPawn  class="icon" /></td>
               <td><FaChessPawn class="icon"  /></td> 
            </tr> 


            <tr>
               <td></td> 
               <td style={{backgroundColor: "green"}}></td>
               <td></td>
               <td  style={{backgroundColor: "green"}}></td>
               <td></td>
               <td  style={{backgroundColor: "green"}}></td>
               <td></td>
               <td style={{backgroundColor: "green"}}></td> 
            </tr> 


            <tr>
               <td  style={{backgroundColor: "green"}}></td> 
               <td></td>
               <td style={{backgroundColor: "green"}}></td>
               <td></td>
               <td style={{backgroundColor: "green"}}></td>
               <td></td>
               <td style={{backgroundColor: "green"}}></td>
               <td></td> 
            </tr> 


            <tr>
               <td></td> 
               <td  style={{backgroundColor: "green"}}></td>
               <td></td>
               <td  style={{backgroundColor: "green"}}></td>
               <td></td>
               <td  style={{backgroundColor: "green"}}></td>
               <td></td>
               <td style={{backgroundColor: "green"}}></td> 
            </tr> 


            <tr>
               <td style={{backgroundColor: "green"}}></td> 
               <td></td>
               <td  style={{backgroundColor: "green"}}></td>
               <td></td>
               <td  style={{backgroundColor: "green"}}></td>
               <td></td>
               <td style={{backgroundColor: "green"}}></td>
               <td></td> 
            </tr> 


            <tr>
               <td><FaRegChessPawn class="icon" /></td> 
               <td  style={{backgroundColor: "green"}}><FaRegChessPawn class="icon" /></td>
               <td><FaRegChessPawn class="icon" /></td>
               <td  style={{backgroundColor: "green"}}><FaRegChessPawn class="icon" /></td>
               <td><FaRegChessPawn class="icon" /></td>
               <td style={{backgroundColor: "green"}}><FaRegChessPawn class="icon" /></td>
               <td><FaRegChessPawn class="icon" /></td>
               <td  style={{backgroundColor: "green"}}><FaRegChessPawn  class="icon"/></td> 
            </tr> 


            <tr>
               <td  style={{backgroundColor: "green"}}><FaRegChessRook  class="icon"/></td> 
               <td><FaRegChessKnight class="icon" /></td>
               <td  style={{backgroundColor: "green"}}><FaRegChessBishop class="icon" /></td>
               <td><FaRegChessQueen  class="icon"/></td>
               <td  style={{backgroundColor: "green"}}><TbChessKing class="icon" /></td>
               <td><FaRegChessBishop class="icon" /></td>
               <td style={{backgroundColor: "green"}}><FaRegChessKnight class="icon"  /></td>
               <td><FaRegChessRook class="icon"/></td> 
            </tr> 


           </table>
        </div>
        </div>
    )
}
export default Board;