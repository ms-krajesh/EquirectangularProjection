#version 330 core
in vec3 ourColor;
in vec2 TexCoord;

uniform sampler2D texture_src;
uniform sampler2D texture_logo;
uniform vec2 size_src;
uniform vec2 size_logo;
uniform float scale;
uniform float angle;
out vec4 color;
const float PI  = 3.1415926;
void main()
{
    vec4 color_tmp;
    float a,b;
    float Rq = TexCoord.y  * scale * size_src.y;
    float arcQP = TexCoord.x * 2 * PI *Rq;
    a = (size_logo.x/2 - float(Rq) * sin(float(arcQP)/float(Rq)- angle * PI / 180.0)) / size_logo.x;
    b = (size_logo.y/2 - float(Rq) * cos(float(arcQP)/float(Rq)- angle * PI / 180.0)) / size_logo.y;
    vec2 TexCoord_logo = vec2(a,b);
    if(a >= 0.0f && a <= 1.0f && b >= 0.0f && b <= 1.0f)
    {
        color_tmp = texture(texture_logo, TexCoord_logo);
    }
    else
    {
        color_tmp = texture(texture_src, TexCoord);
    }
    color = vec4(color_tmp.b, color_tmp.g, color_tmp.r, 1.0) ;

}
