/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package servlet;

import da.MemberDA;
import domain.Member;
import java.io.IOException;
import java.io.PrintWriter;
import java.sql.SQLException;
import java.util.logging.Level;
import java.util.logging.Logger;
import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

/**
 *
 * @author nethe
 */
public class RegisterProcess extends HttpServlet {

    /**
     * Processes requests for both HTTP <code>GET</code> and <code>POST</code>
     * methods.
     *
     * @param request servlet request
     * @param response servlet response
     * @throws ServletException if a servlet-specific error occurs
     * @throws IOException if an I/O error occurs
     */
    protected void processRequest(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        response.setContentType("text/html;charset=UTF-8");
        PrintWriter out = response.getWriter();

        String email = request.getParameter("email");
        email = email == null ? "" : email.trim();

        String pwd = request.getParameter("pwd");
        pwd = pwd == null ? "" : pwd;

        String pwdc = request.getParameter("pwdconfirm");
        pwdc = pwdc == null ? "" : pwdc;

        String username = request.getParameter("username");
        username = username == null ? "" : username.trim();

        MemberDA memberDA = new MemberDA();
        Member newMember = new Member(username, pwd, email);
        if (!email.matches("^[\\w-_\\.+]*[\\w-_\\.]\\@([\\w]+\\.)+[\\w]+[\\w]$")) {
            request.setAttribute("regErrMsg", "Email invalid");
            RequestDispatcher rd = request.getRequestDispatcher("reg.jsp");
            rd.forward(request, response);
            return;
        }

        if (memberDA.getRecordByEmail(email) != null) {
            request.setAttribute("regErrMsg", "Email existed");
            RequestDispatcher rd = request.getRequestDispatcher("reg.jsp");
            rd.forward(request, response);
            return;
        }

        if (memberDA.getRecordByUsername(username) != null) {
            request.setAttribute("regErrMsg", "Username taken");
            RequestDispatcher rd = request.getRequestDispatcher("reg.jsp");
            rd.forward(request, response);
            return;
        }

        if (!pwd.matches("((?=.*[a-z])(?=.*\\d)(?=.*[A-Z])(?=.*[@#$%!]).{8,18})")) {
            request.setAttribute("regErrMsg", "Password invalid.");
            RequestDispatcher rd = request.getRequestDispatcher("reg.jsp");
            rd.forward(request, response);
            return;
        }

        if (!pwd.equals(pwdc)) {
            request.setAttribute("regErrMsg", "Password unmatched");
            RequestDispatcher rd = request.getRequestDispatcher("reg.jsp");
            rd.forward(request, response);
            return;
        }

        try {
            int row = memberDA.addRecord(newMember);
        } catch (SQLException ex) {
            Logger.getLogger(RegisterProcess.class.getName()).log(Level.SEVERE, null, ex);
        }

        //HttpSession session = request.getSession();
        //session.setAttribute("regMember", newMember);
        request.setAttribute("pwd", pwd);
        request.setAttribute("email", email);
        RequestDispatcher rd = request.getRequestDispatcher("LoginProcess");
        rd.forward(request, response);
    }

// <editor-fold defaultstate="collapsed" desc="HttpServlet methods. Click on the + sign on the left to edit the code.">
    /**
     * Handles the HTTP <code>GET</code> method.
     *
     * @param request servlet request
     * @param response servlet response
     * @throws ServletException if a servlet-specific error occurs
     * @throws IOException if an I/O error occurs
     */
    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        processRequest(request, response);
    }

    /**
     * Handles the HTTP <code>POST</code> method.
     *
     * @param request servlet request
     * @param response servlet response
     * @throws ServletException if a servlet-specific error occurs
     * @throws IOException if an I/O error occurs
     */
    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        processRequest(request, response);
    }

    /**
     * Returns a short description of the servlet.
     *
     * @return a String containing servlet description
     */
    @Override
    public String getServletInfo() {
        return "Short description";
    }// </editor-fold>

}
