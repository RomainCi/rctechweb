<!doctype html>
<html lang="fr">

<head>
    <meta charset="UTF-8">
    <meta name="viewport"
        content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Formulaire de contact</title>
</head>

<body style="font-family: Arial, sans-serif;">

    <table cellspacing="0" cellpadding="0" border="0" align="center" width="100%" style="border-collapse: collapse;">
        <tr>
            <td style="padding: 20px; background-color: #f5f5f5;">
                <h1 style="font-size: 24px; margin: 0; color: #333; text-align: center;">Nouveau Message du Formulaire
                    de
                    Contact</h1>
            </td>
        </tr>
        <tr>
            <td style="padding: 5px;">
                <table cellspacing="0" cellpadding="0" border="0" align="center" width="100%"
                    style="border-collapse: separate; border-spacing: 0;">
                    <tr>
                        <td style="font-size: 16px; color: #333; padding: 5px 0;width: 70px">Nom :</td>
                        <td style="font-size: 16px; color: #333; padding: 5px 0;">{{ $data['lastname'] }}</td>
                    </tr>
                    <tr>
                        <td style="font-size: 16px; color: #333; padding: 5px 0;width: 70px">Prénom :</td>
                        <td style="font-size: 16px; color: #333; padding: 5px 0;">{{ $data['firstname'] }}</td>
                    </tr>
                    <tr>
                        <td style="font-size: 16px; color: #333; padding: 5px 0;width: 70px">Email :</td>
                        <td style="font-size: 16px; color: #333; padding: 5px 0;"><a
                                href="mailto:{{ $data['email'] }}">{{ $data['email'] }}</a></td>
                    </tr>
                </table>
            </td>
        </tr>
    </table>
    <p style="font-size: 16px; color: #333; padding: 5px 0;">{{ $data['text'] }}</p>
</body>


</html>
