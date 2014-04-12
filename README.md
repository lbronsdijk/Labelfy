Labelfy
=======

jQuery Plugin - Labelfy

##Description
Labelfy is a little jQuery plugin which merges an inputbox and its label together, and puts it into a placeholder element. Very handy if you don't have enough space for labels, or when you use auto generated forms.

##Requirements
Labelfy requires jQuery 1.9.x or higer. If you want to use effects you need to include jQuery UI 1.10.x or higher.

##Getting Started
Download the Labelfy plugin and include these together with your jQuery version.

####Includes
`````
<script src="js/jquery-1.9.1.js"></script>
<script src="js/jquery-ui-1.10.4.min.js"></script>
<script src="js/jquery.labelfy.js"></script>
`````

####Calling Labelfy

Knock, knock. Who is there? Me, I call you, Labelfy!

To submit Labelfy on a selector, use following line:
`````
$(this).labelfy(
    false, 
    {
        color: '#000',
        fx: 'pulsate'
    });
`````
####Options

You can customize Labelfy by following available options:

<table>
<thead>
        <tr>
            <th>Variable</th>
            <th>Default Value</th>
            <th>Description</th>
            <th>Valid Options</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>color</td>
            <td>#666</td>
            <td>Defines placeholder color</td>
            <td>*</td>
        </tr>
        <tr>
            <td>fx</td>
            <td>false</td>
            <td>Defines effect (jQuery UI required)</td>
            <td>blind / bounce / drop / explode / fold / highlight / puff / pulsate / scale / shake / size / slide</td>
        </tr>
        <tr>
            <td>trigger</td>
            <td>focus</td>
            <td>Defines trigger on event and determinates when placeholder needs to be cleared</td>
            <td>focus / blur</td>
        </tr>
        <tr>
            <td>force</td>
            <td>false</td>
            <td>Definite if script needs to be executed, even if input is empty</td>
            <td>true / false</td>
        </tr>
        <tr>
            <td>comeBack</td>
            <td>true</td>
            <td>Definite if label needs to be shown on blur (and input is empty)</td>
            <td>true / false</td>
        </tr>
    </tbody>
</table>
