<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
    <xsl:template match="/">
    <html>
    <body>
        <h2>Bike Model's</h2>
            <table border="1">
                <tr>
                    <th>ID</th>
                    <th>Make</th>
                    <th>Model</th>
                    <th>Displacement</th>
                    <th>HP</th>
                </tr>
                <xsl:for-each select="bike/name">
                <tr>
                    <td><xsl:value-of select="@id" /></td>
                    <td><xsl:value-of select="make"/></td>
                    <td><xsl:value-of select="model" /></td>
                    <td><xsl:value-of select="displacement" /></td>
                    <td><xsl:value-of select="hp" /></td>
                </tr>
                </xsl:for-each>
            </table>
    </body>
    </html>
    </xsl:template>
</xsl:stylesheet>