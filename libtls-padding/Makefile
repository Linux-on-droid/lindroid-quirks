all: libtls-padding.so
.PHONY: all

libtls-padding.so: tls-padding.cpp
	$(CXX) $(CPPFLAGS) $(CXXFLAGS) -std=c++11 -shared -o $@ $^

.PHONY: clean
clean:
	rm -rf libtls-padding.so
